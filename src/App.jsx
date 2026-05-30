export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>GST Lite Dashboard</h1>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
        <div style={{ border: "1px solid black", padding: 20 }}>
          <h3>Customers</h3>
          <p>Add / View Customers</p>
        </div>

        <div style={{ border: "1px solid black", padding: 20 }}>
          <h3>Items</h3>
          <p>Manage Products</p>
        </div>

        <div style={{ border: "1px solid black", padding: 20 }}>
          <h3>Invoices</h3>
          <p>Create GST Bills</p>
        </div>
      </div>
    </div>
  )
}
