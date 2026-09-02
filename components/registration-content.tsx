import { ExternalLink } from 'lucide-react';
import { ConferenceShell } from '@/components/conference-shell';

export default function RegistrationContent() {
  return (
    <ConferenceShell title="Registration" activePage="Registration">
      {/* ================================================================
          TODO: REGISTRATION INTRODUCTION
          Replace the opening status, early-bird deadline, and discount text
          below once the official CAD/Graphics 2026 policy is confirmed.
          Temporary source: CVM 2026 registration page.
          ================================================================ */}
      <section className="content-block intro-block">
        <h2>Registration Fees &amp; Payment</h2>
        <p>
          Registration for CAD/Graphics 2026 is now open. We offer a special early-bird price for registration
          completed before (including) 23:59 UTC+9(KST), November 6, 2026. We also offer discounts for active
          AsiaGraphics members or students.
        </p>
      </section>

      {/* TODO: Replace all KRW prices and plan dates with the official CAD/Graphics 2026 fee table. */}
      <section className="content-block">
        <h2>Registration Fees (KRW)</h2>
        <div className="table-scroll" role="region" aria-label="Registration fees in Korean won" tabIndex={0}>
          <table className="fee-table">
            <thead>
              <tr>
                <th scope="col">Plan</th>
                <th scope="col">Type</th>
                <th scope="col">AsiaGraphics Member</th>
                <th scope="col">Non AsiaGraphics Member</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" rowSpan={2}>Early-Bird<span>Through November 6</span></th>
                <td>Full</td><td>790,000</td><td>950,000</td>
              </tr>
              <tr><td>Student</td><td>430,000</td><td>520,000</td></tr>
              <tr>
                <th scope="row" rowSpan={2}>Standard<span>From November 7</span></th>
                <td>Full</td><td>880,000</td><td>1,050,000</td>
              </tr>
              <tr><td>Student</td><td>510,000</td><td>600,000</td></tr>
            </tbody>
          </table>
        </div>
        <p className="table-note">All prices are in South Korean won (KRW).</p>
      </section>

      {/* TODO: Replace all USD prices after the KRW fees and exchange-rate policy are finalized. */}
      <section className="content-block">
        <h2>Registration Fees (USD)</h2>
        <div className="table-scroll" role="region" aria-label="Registration fees in US dollars" tabIndex={0}>
          <table className="fee-table">
            <thead>
              <tr>
                <th scope="col">Plan</th>
                <th scope="col">Type</th>
                <th scope="col">AsiaGraphics Member</th>
                <th scope="col">Non AsiaGraphics Member</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" rowSpan={2}>Early-Bird<span>Through November 6</span></th>
                <td>Full</td><td>$540</td><td>$650</td>
              </tr>
              <tr><td>Student</td><td>$300</td><td>$360</td></tr>
              <tr>
                <th scope="row" rowSpan={2}>Standard<span>From November 7</span></th>
                <td>Full</td><td>$600</td><td>$720</td>
              </tr>
              <tr><td>Student</td><td>$350</td><td>$410</td></tr>
            </tbody>
          </table>
        </div>
        <p className="table-note">USD prices are provided for reference.</p>
      </section>

      {/* TODO: Review these author-registration rules with the CAD/Graphics 2026 committee. */}
      <section className="content-block">
        <h2>Important Notes</h2>
        <ul className="detail-list">
          <li>Every accepted journal paper, poster paper, and technical brief must have at least one Full registration by the early-bird registration deadline.</li>
          <li>Author registration per paper must be completed under the regular registration category. Student registration cannot be accepted as author registration.</li>
          <li>Both Full and Student registration provide access to all sessions.</li>
          <li>Student ID cards will be required on site as evidence for the reduced student fee.</li>
          <li>Accommodation and travel are not included in the registration fee.</li>
          <li>To become a new AsiaGraphics member or reactivate your membership, visit the <a href="http://www.asiagraphics.org/membership/" target="_blank" rel="noreferrer">AsiaGraphics membership page</a>.</li>
        </ul>
      </section>

      {/* TODO: Replace this temporary CVM registration URL with the official CAD/Graphics 2026 registration system. */}
      <section className="content-block registration-cta">
        <div>
          <h2>Registration Website</h2>
          <p>To register for CAD/Graphics 2026, please visit the registration website.</p>
        </div>
        <a className="primary-link" href="https://cg-korea.org/index.php?hCode=CADG2026" target="_blank" rel="noreferrer">
          Open Registration <ExternalLink size={17} aria-hidden="true" />
        </a>
      </section>

      {/* TODO: Confirm the official cancellation deadline and refund percentage. */}
      <section className="content-block">
        <h2>Terms and Conditions</h2>
        <h3>Cancellation Policy</h3>
        <p>70% of the registration fee will be refunded if cancellation is made by November 6, 2026.</p>
        <p>After this date, regrettably, cancellations are not permitted.</p>
        <h3>Substitution Policy</h3>
        <p>Registrations are transferable if the original registrant is unable to attend; however, the conference committee generally cannot assist in finding a replacement.</p>
      </section>
    </ConferenceShell>
  );
}

