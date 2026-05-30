import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  "YOUR_SUPABASE_URL",
  "YOUR_SUPABASE_ANON_KEY"
)

export default function App() {
  async function testConnection() {
    const { data, error } = await supabase.from("customers").select("*")
    console.log(data, error)
  }

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>GST Lite</h1>

      <button onClick={testConnection}>
        Test Supabase Connection
      </button>
    </div>
  )
}
