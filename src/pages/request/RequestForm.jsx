import "./requestForm.css";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { database } from "../../firebaseConfig";
import { addDoc, collection, doc, getDoc, serverTimestamp } from "firebase/firestore";

export default function RequestForm() {
  const { id } = useParams(); // serviceId opcional
  const navigate = useNavigate();

  const [service, setService] = useState(null);
  const [loadingService, setLoadingService] = useState(false);

  const [form, setForm] = useState({
    customerName: "",
    phone: "",
    address: "",
    preferredTime: "",
    details: "",
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // Trae info del servicio si viene con :id
  useEffect(() => {
    const fetchService = async () => {
      if (!id) return;
      setLoadingService(true);
      try {
        const ref = doc(database, "services", id);
        const snap = await getDoc(ref);
        if (snap.exists()) setService({ id: snap.id, ...snap.data() });
      } catch (e) {
        console.error(e);
      } finally {
        setLoadingService(false);
      }
    };
    fetchService();
  }, [id]);

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validación mínima
    if (!form.customerName.trim()) return setError("Completá tu nombre.");
    if (!form.phone.trim()) return setError("Completá tu teléfono.");
    if (!form.address.trim()) return setError("Completá tu dirección.");
    if (!form.details.trim()) return setError("Contanos qué necesitás.");

    setSaving(true);
    try {
      const payload = {
        serviceId: id || null,
        serviceName: service?.name || null,
        customerName: form.customerName.trim(),
        phone: form.phone.trim(),
        address: form.address.trim(),
        preferredTime: form.preferredTime.trim(),
        details: form.details.trim(),
        status: "pendiente",
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(database, "requests"), payload);

      // Opcional: abrir WhatsApp con mensaje armado
      const msg =
        `Hola! Quiero solicitar un servicio.\n` +
        `Servicio: ${payload.serviceName || "No especificado"}\n` +
        `Nombre: ${payload.customerName}\n` +
        `Tel: ${payload.phone}\n` +
        `Dirección: ${payload.address}\n` +
        `Horario: ${payload.preferredTime || "-"}\n` +
        `Detalle: ${payload.details}`;

      // Cambiá por el número real (con código país, sin + ni espacios)
      const phoneAdmin = "+543517118029";
      window.open(`https://wa.me/${phoneAdmin}?text=${encodeURIComponent(msg)}`, "_blank");

      navigate("/mis-solicitudes");
    } catch (e) {
      console.error(e);
      setError("No se pudo enviar la solicitud. Revisá permisos de Firestore.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <h1>Solicitar servicio</h1>

      {loadingService && <p>Cargando servicio...</p>}
      {service?.name && <p><strong>Servicio:</strong> {service.name}</p>}

      <form onSubmit={onSubmit} className="reqForm">
  <div className="reqGrid">
    <div className="field">
      <label>Tu nombre</label>
      <input name="customerName" value={form.customerName} onChange={onChange} placeholder="Ej: Ailén" />
    </div>

    <div className="field">
      <label>Teléfono</label>
      <input name="phone" value={form.phone} onChange={onChange} placeholder="Ej: 11 1234-5678" />
    </div>

    <div className="field full">
      <label>Dirección</label>
      <input name="address" value={form.address} onChange={onChange} placeholder="Calle 123, Piso, Depto" />
    </div>

    <div className="field full">
      <label>Horario preferido (opcional)</label>
      <input name="preferredTime" value={form.preferredTime} onChange={onChange} placeholder="Ej: Lun a Vie 14–18" />
    </div>

    <div className="field full">
      <label>Detalle</label>
      <textarea name="details" value={form.details} onChange={onChange} rows={4} placeholder="Contanos qué necesitás..." />
    </div>
  </div>

  {error && <p className="reqError">{error}</p>}

  <button type="submit" className="reqBtn" disabled={saving}>
    {saving ? "Enviando..." : "Enviar solicitud"}
  </button>
</form>

    </div>
  );
}
