import React, { useEffect, useState } from "react";
import { database } from "../../firebaseConfig";
import { collection, getDocs, query } from "firebase/firestore";

export default function MyRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const ref = collection(database, "requests");
        const q = query(ref);
        const res = await getDocs(q);
        const data = res.docs.map((d) => ({ id: d.id, ...d.data() }));
        setRequests(data);
      } catch (e) {
        console.error("Error fetching requests:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div>
      <h1>Mis Solicitudes</h1>

      {loading && <p>Cargando...</p>}

      {!loading && requests.length === 0 && (
        <p>Aún no tenés solicitudes. Creá una desde “Solicitar Servicio”.</p>
      )}

      <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
        {requests.map((r) => (
          <div
            key={r.id}
            style={{
              border: "1px solid var(--border, #e5e7eb)",
              borderRadius: 14,
              padding: 14,
              background: "var(--surface, #fff)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
              <strong>{r.serviceName || "Servicio"}</strong>
              <span style={{ color: "var(--muted, #6b7280)" }}>
                {r.status || "pendiente"}
              </span>
            </div>

            <div style={{ marginTop: 8, color: "var(--muted, #6b7280)" }}>
              {r.details || "Sin detalles"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
