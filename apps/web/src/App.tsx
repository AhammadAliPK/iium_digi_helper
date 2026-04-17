import { Button } from '@iium-portal/ui';
import { Card, CardDescription, CardTitle } from '@iium-portal/ui';

export default function App() {
  return (
    <>
      <header style={{ padding: '24px 0', borderBottom: '1px solid var(--iium-border-subtle)', position: 'sticky', top: 0, background: 'rgba(3,15,13,0.9)', backdropFilter: 'blur(10px)', zIndex: 100 }}>
        <div className="dls-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px' }}>
            IIUM <span style={{ color: 'var(--iium-gold)' }}>DIGITAL</span>
          </h1>
          <div style={{ display: 'flex', gap: '32px', fontSize: '11px', fontWeight: 700, color: 'var(--iium-text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
            <span>Change Request Portal</span>
          </div>
        </div>
      </header>

      <main className="dls-container">
        <section>
          <span className="brand-label">Official Design Language v1.0</span>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '64px', lineHeight: 1.1, marginBottom: '24px' }}>
            Software Change <br />
            <span style={{ color: 'var(--iium-teal)' }}>Request Portal</span>
          </h1>
          <p style={{ maxWidth: '600px', color: 'var(--iium-text-secondary)', fontSize: '18px', fontWeight: 300 }}>
            Streamlined request management for IIUM digital services. Built with the official IIUM Design Language System.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-heading)', marginBottom: '40px', fontSize: '32px' }}>Component Library</h2>
          <div className="grid-layout">

            <Card>
              <span className="brand-label">Portal Card</span>
              <CardTitle>Student Resources</CardTitle>
              <CardDescription>
                Access the IIUM Library, e-learning portals, and academic records from a single interface.
              </CardDescription>
              <Button variant="default">Enter Portal</Button>
            </Card>

            <Card>
              <span className="brand-label">Input Elements</span>
              <div style={{ marginTop: '16px' }}>
                <label style={{ fontSize: '11px', color: 'var(--iium-text-muted)' }}>
                  Search Library Collection
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search keywords..."
                />
                <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
                  <Button variant="secondary">Search</Button>
                  <Button variant="ghost">Advanced</Button>
                </div>
              </div>
            </Card>

            <Card>
              <span className="brand-label">Typography System</span>
              <h3 style={{ marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>Roboto Slab</h3>
              <p style={{ color: 'var(--iium-text-accent)', fontFamily: 'var(--font-condensed)', fontSize: '20px', fontWeight: 700, textTransform: 'uppercase' }}>
                Barlow Condensed
              </p>
              <p style={{ color: 'var(--iium-text-secondary)', fontSize: '13px', marginTop: '16px' }}>
                Paired for academic authority and digital efficiency.
              </p>
            </Card>

          </div>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-heading)', marginBottom: '40px', fontSize: '32px' }}>Button Styles</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            <Button variant="default">Primary (Teal)</Button>
            <Button variant="secondary">Secondary (Gold)</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="link">Link</Button>
          </div>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-heading)', marginBottom: '40px', fontSize: '32px' }}>Core Brand Tokens</h2>
          <div className="grid-layout">
            <div style={{ gridColumn: 'span 2' }}>
              <div className="token-item"><span className="token-name">--iium-teal</span><span>#008670</span></div>
              <div className="token-item"><span className="token-name">--iium-gold</span><span>#CDB067</span></div>
              <div className="token-item"><span className="token-name">--iium-deep-bg</span><span>#030F0D</span></div>
              <div className="token-item"><span className="token-name">--iium-heading-font</span><span>'Roboto Slab'</span></div>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
              <div style={{ background: 'var(--iium-teal)', height: '80px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '12px', textTransform: 'uppercase' }}>Official Teal</div>
              <div style={{ background: 'var(--iium-gold)', height: '80px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'black', fontSize: '12px', textTransform: 'uppercase' }}>Official Gold</div>
            </div>
          </div>
        </section>

        <section style={{ borderBottom: 'none' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', marginBottom: '40px', fontSize: '32px' }}>Logo Usage & Integrity</h2>
          <div className="iium-card" style={{ borderColor: 'rgba(255, 68, 68, 0.2)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '40px' }}>
              <div>
                <h4 style={{ color: '#ff4d4d', marginBottom: '16px', fontFamily: 'var(--font-condensed)', textTransform: 'uppercase', letterSpacing: '1px' }}>Strict Prohibitions</h4>
                <ul style={{ fontSize: '14px', color: 'var(--iium-text-secondary)', listStyle: 'none' }}>
                  <li style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}><span>✕</span> No drop shadows or strokes on the IIUM Logo.</li>
                  <li style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}><span>✕</span> No distortion of logo proportions.</li>
                  <li style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}><span>✕</span> No placement on busy or low-contrast backgrounds.</li>
                </ul>
              </div>
              <div style={{ background: 'white', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black', fontWeight: 'bold', padding: '40px', textAlign: 'center', border: '4px dashed #ddd' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '12px' }}>OFFICIAL LOGO<br />CLEAR SPACE ZONE</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer style={{ padding: '80px 0', borderTop: '1px solid var(--iium-border-subtle)', textAlign: 'center' }}>
        <p style={{ fontSize: '11px', color: 'var(--iium-text-muted)', textTransform: 'uppercase', letterSpacing: '2.5px', fontWeight: 600 }}>
          International Islamic University Malaysia • © 2026 Digital Identity Standard
        </p>
      </footer>
    </>
  );
}
