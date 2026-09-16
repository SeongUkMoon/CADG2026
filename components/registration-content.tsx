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

      {/* TODO: Replace plan dates and fees if the official CAD/Graphics 2026 policy changes. */}
      <section className="content-block">
        <h2>Registration Fees</h2>
        <div className="table-scroll" role="region" aria-label="Registration fees in Korean won and US dollars" tabIndex={0}>
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
                <td>Full</td><td>750,000 KRW / 550 USD</td><td>900,000 KRW / 660 USD</td>
              </tr>
              <tr><td>Student</td><td>410,000 KRW / 300 USD</td><td>490,000 KRW / 360 USD</td></tr>
              <tr>
                <th scope="row" rowSpan={2}>Standard<span>From November 7</span></th>
                <td>Full</td><td>820,000 KRW / 600 USD</td><td>980,000 KRW / 720 USD</td>
              </tr>
              <tr><td>Student</td><td>480,000 KRW / 350 USD</td><td>580,000 KRW / 420 USD</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-block">
        <h2>Important Notes</h2>
        <ul className="detail-list">
          <li>At least one Full registration per paper must be completed. Therefore, even if the sole author is a student, Full registration is still required per paper.</li>
          <li>Both Full and Student registrations grant access to all sessions.</li>
          <li>Student ID cards may be required on site for student registrants.</li>
          <li>Accommodation or travel is not included.</li>
          <li>AsiaGraphics membership: <a href="http://www.asiagraphics.org/membership/" target="_blank" rel="noreferrer">Visit site</a></li>
          <li>Contact: <a href="mailto:cad-graphics-2026@googlegroups.com">cad-graphics-2026@googlegroups.com</a></li>
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

      <section className="content-block">
        <h2>Terms and Conditions</h2>
        <p>Please take a moment to review the terms and conditions for this event.</p>
        <ul className="detail-list">
          <li><strong>Cancellation Policy:</strong> 70% refund for cancellations on or before November 6, 2026. No refunds thereafter.</li>
          <li><strong>Substitution Policy:</strong> Registrations are transferable; the committee cannot assist in finding replacements.</li>
        </ul>
      </section>
    </ConferenceShell>
  );
}

