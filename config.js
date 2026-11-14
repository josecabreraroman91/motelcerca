// Configuración pública de MOTEL CERCA.
// HOY LA APP ANDA SIN BASE (decisión de José, 14/11/2026, para no gastar): lee datos/moteles-app.json y los dueños
// mandan sus datos por WhatsApp a Orbe. Por eso supabaseUrl y supabaseKey van vacíos.
// Cuando haya base propia: completar con la dirección y la clave PUBLICABLE del proyecto (nunca la secreta).
// Para probar el panel con la base local (Docker): supabaseUrl 'http://127.0.0.1:58421' y la ANON_KEY que muestra `supabase status`.
window.MC_CONFIG = {
  supabaseUrl: '',
  supabaseKey: '',
  googleActivo: false
};
