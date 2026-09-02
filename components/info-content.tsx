import { BedDouble, BookOpen, Bus, ExternalLink, Mountain, Plane, Train } from 'lucide-react';
import { ConferenceShell } from '@/components/conference-shell';
import { withSiteBasePath } from '@/lib/site-path';

const external = { target: '_blank', rel: 'noreferrer' } as const;

export default function InfoContent() {
  return (
    <ConferenceShell title="Visitor Information" activePage="Visitor Info">
      {/* ================================================================
          VENUE INTRODUCTION
          Summary based on official Seoul National University history,
          vision, and Gwanak Campus information.
          ================================================================ */}
      <section className="content-block intro-block">
        <h2>Seoul National University, Seoul, South Korea</h2>
        <figure className="wide-figure">
          <img src={withSiteBasePath('/images/snu-campus.jpg')} alt="Seoul National University campus" />
          <figcaption>Seoul National University campus in Seoul</figcaption>
        </figure>
        <p>
          Founded in 1946 as Korea&apos;s first national university, Seoul National University has grown into a
          leading comprehensive research university. SNU advances education and research across disciplines while
          pursuing its vision as an academic community at the forefront of global transformation.
        </p>
        <p>
          Established as SNU&apos;s integrated main campus in 1975, the Gwanak Campus is located at the foot of
          Gwanaksan Mountain. Its expansive grounds bring together 14 colleges, major research facilities, and
          affiliated organizations in a setting where academic exchange meets the natural landscape of southern Seoul.
        </p>
      </section>

      {/* VENUE DETAILS: Update this section if the conference building or campus links change. */}
      <section className="content-block" id="venue">
        <h2>Conference Venue</h2>
        <p>The CAD/Graphics 2026 conference will take place at Seoul National University.</p>
        <div className="feature-grid">
          <article className="feature-card"><Mountain aria-hidden="true" /><h3>Inspiring Natural Setting</h3><p>Set at the foot of Gwanaksan, the campus offers a green and scenic environment away from the city center.</p></article>
          <article className="feature-card"><BookOpen aria-hidden="true" /><h3>Academic &amp; Cultural Hub</h3><p>The main campus brings together 14 colleges, major research facilities, libraries, museums, and cultural spaces.</p></article>
        </div>
        <figure className="wide-figure map-figure">
          <img src={withSiteBasePath('/images/venue-map-optimized.png')} alt="Map showing Seoul National University and nearby transit" />
          <figcaption>Venue location and surrounding area</figcaption>
        </figure>
        <ul className="detail-list link-list">
          <li><strong>Global Education Center for Engineers, Seoul National University</strong><br />Building 38, 1, Gwanak-ro, Gwanak-gu, Seoul, Republic of Korea</li>
          <li><a href="https://maps.app.goo.gl/wwksviQf5pEKq6pB7" {...external}>Open in Google Maps <ExternalLink size={15} aria-hidden="true" /></a></li>
          <li><a href="https://map.snu.ac.kr/web/main.action" {...external}>Seoul National University Campus Map <ExternalLink size={15} aria-hidden="true" /></a></li>
        </ul>
      </section>

      {/* TODO: Update airport routes, fares, visa requirements, and dates shortly before publication. */}
      <section className="content-block" id="transportation">
        <h2>Transportation &amp; Travel</h2>
        <h3 className="icon-heading"><Plane aria-hidden="true" /> Airport Transfer</h3>
        <div className="travel-options">
          <article>
            <h4><Bus aria-hidden="true" /> Airport Limousine Bus No. 6017</h4>
            <dl className="info-list">
              <div><dt>Route</dt><dd>Incheon Airport Terminal 1 → Hoam Faculty House</dd></div>
              <div><dt>Interval</dt><dd>Every 30 minutes</dd></div>
              <div><dt>Duration</dt><dd>85–90 minutes</dd></div>
              <div><dt>Fare</dt><dd>KRW 16,000–17,500</dd></div>
              <div><dt>Boarding</dt><dd>Terminal 1 B1, Bus Stop No. 6</dd></div>
            </dl>
          </article>
          <article>
            <h4><Train aria-hidden="true" /> AREX + Subway + Bus</h4>
            <dl className="info-list">
              <div><dt>Route</dt><dd>AREX → Hongik Univ. Station → Line 2 → Nakseongdae Station (Exit 4) → Turn left past exit for bus →Gwanak 02-1 (Green Bus) → Hoam Faculty House</dd></div>
              <div><dt>Duration</dt><dd>Approximately 1 hour 43 minutes</dd></div>
              <div><dt>Fare</dt><dd>KRW 5,500–7,500</dd></div>
            </dl>
          </article>
          <article>
            <h4>Taxi or Private Car</h4>
            <dl className="info-list">
              <div><dt>Taxi fare</dt><dd>Approximately KRW 55,000–70,000</dd></div>
              <div><dt>Car service</dt><dd>Approximately KRW 75,000–95,000</dd></div>
              <div><dt>Travel time</dt><dd>Approximately 51 minutes</dd></div>
            </dl>
          </article>
        </div>
        <p className="inline-link"><a href="https://www.rome2rio.com/map/Incheon-Airport-ICN/Hoam-Faculty-House?accom_comparison=true" {...external}>Compare airport transfer options on Rome2Rio <ExternalLink size={15} aria-hidden="true" /></a></p>

        <h3>Visa &amp; Entry</h3>
        <ul className="detail-list">
          <li>K-ETA may be required for travelers from visa-free countries. Apply at least 72 hours before departure.</li>
          <li><a href="https://www.k-eta.go.kr/" {...external}>Korea Electronic Travel Authorization (K-ETA)</a></li>
          <li><a href="https://www.visa.go.kr/" {...external}>Korea Visa Portal</a></li>
          <li><a href="https://www.mofa.go.kr/" {...external}>Ministry of Foreign Affairs</a></li>
          <li><a href="https://english.visitkorea.or.kr/" {...external}>Visit Korea Tourist Information</a></li>
        </ul>

        <h3>Local Transportation</h3>
        <ul className="detail-list">
          <li><strong>Subway:</strong> Seoul Nat&apos;l Univ. Stations (Line 2); also accessible via Gwanaksan Station (Sillim Line).</li>
          <li><strong>Bus:</strong> Airport bus 6017 and local buses Gwanak 02-1, Gwanak 02-2, 5511, 5513, 5516.</li>
          <li><strong>Taxi:</strong> Kakao T is recommended and offers an English interface. Uber is available in limited areas.</li>
          <li><strong>Map apps:</strong> <a href="https://naver.me/FtTxWBu5" {...external}>Naver Map</a> and <a href="https://kko.to/9KgYXPsnMt" {...external}>KakaoMap</a>.</li>
        </ul>
      </section>

      {/* ================================================================
          TODO: ACCOMMODATION
          Replace every room rate, availability note, contact, reservation
          address, and form link with CAD/Graphics 2026 information.
          ================================================================ */}
      <section className="content-block" id="accommodation">
        <h2>Accommodation</h2>
        <h3 className="icon-heading"><BedDouble aria-hidden="true" /> Hoam Faculty House</h3>
        <p>Hoam Faculty House is located in Building 125 at Seoul National University.</p>
        <figure className="wide-figure accommodation-figure">
          <img src={withSiteBasePath('/images/hoam_faculty_house.webp')} alt="Guest room at Hoam Faculty House" />
          <figcaption>Hoam Faculty House guest accommodation</figcaption>
        </figure>
        <div className="table-scroll" role="region" aria-label="Hoam Faculty House room rates" tabIndex={0}>
          <table className="fee-table accommodation-table">
            <thead><tr><th scope="col">Room Type</th><th scope="col">Rack Rate</th><th scope="col">Special Rate</th><th scope="col">Included</th></tr></thead>
            <tbody>
              <tr><th scope="row">Twin Room<span>2 single beds</span></th><td>KRW 143,000</td><td>KRW 71,500</td><td>Free Wi-Fi</td></tr>
              <tr><th scope="row">Triple Room<span>1 double + 1 single</span></th><td>KRW 165,000</td><td>KRW 82,500</td><td>Free Wi-Fi</td></tr>
            </tbody>
          </table>
        </div>
        <div className="policy-grid">
          <article><h4>Operation Guide</h4><ul><li>Check-in from 15:00</li><li>Check-out by 11:00</li><li>No cooking or smoking in rooms</li></ul></article>
          <article><h4>Availability</h4><p>Approximately 40 rooms are available. Reservations may close early when rooms are fully booked.</p></article>
          <article><h4>Cancellation</h4><p>Notify the reservation team at least 72 hours before arrival. A one-night charge applies to no-shows or late cancellations.</p></article>
        </div>
        <h3>Accommodation Inquiries</h3>
        <ul className="contact-list">
          <li><strong>Telephone:</strong> +82</li>
          <li><strong>Fax:</strong> +82</li>
          <li><strong>Email:</strong> <a href="mailto:-@naver.com">-@naver.com</a></li>
        </ul>
        <p className="inline-link"><a href="https://snuhoam.co.kr/stay/" {...external}>Download the temporary Hoam Faculty House reservation form <ExternalLink size={15} aria-hidden="true" /></a></p>

        <h3>Other Hotels</h3>
        <div className="table-scroll" role="region" aria-label="Other hotels near the venue" tabIndex={0}>
          <table className="fee-table hotel-table">
            <thead><tr><th scope="col">Hotel</th><th scope="col">Rating</th><th scope="col">Access</th><th scope="col">Estimated Rate / Night</th></tr></thead>
            <tbody>
              <tr><th scope="row">JW Marriott Hotel Seoul</th><td>5 star</td><td>30 min by taxi</td><td>KRW 600,000–610,000</td></tr>
              <tr><th scope="row">Four Points By Sheraton Guro</th><td>4 star</td><td>20-25 min by taxi</td><td>KRW 190,000–240,000</td></tr>
              <tr><th scope="row">Shilla Stay Guro</th><td>3 star</td><td>20-25 min by taxi</td><td>KRW 150,000–200,000</td></tr>
              <tr><th scope="row">Lotte City Hotel Guro</th><td>3 star</td><td>20-25 min by taxi</td><td>KRW 140,000–200,000</td></tr>
              <tr><th scope="row">Hotel the Designers Seoul National University</th><td>3 star</td><td>17 min by bus</td><td>KRW 120,000–150,000</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* TOUR GUIDE: Update these recommendations if the venue or visitor program changes. */}
      <section className="content-block" id="tourism">
        <h2>Tour Guide</h2>
        <figure className="wide-figure tour-figure">
          <img src={withSiteBasePath('/images/seoul-tour.png')} alt="Seoul skyline and attractions" />
          <figcaption>Explore Seoul during your visit</figcaption>
        </figure>
        <div className="tour-grid">
          <article><h3>Nearby</h3><ul><li>Gwanaksan Mountain</li><li>Sharosu-gil</li><li>Seoul Land</li><li>Seoul Grand Park</li><li>Local cafés and restaurants</li></ul></article>
          <article><h3>Central &amp; Northern Seoul</h3><ul><li>N Seoul Tower</li><li>Namsan Mountain Park</li><li>Myeong-dong</li><li>Gyeongbokgung Palace</li></ul></article>
          <article><h3>Gangnam</h3><ul><li>COEX and Starfield Library</li><li>Garosu-gil</li><li>Lotte World and Lotte Tower</li></ul></article>
          <article><h3>Yeouido &amp; Nearby</h3><ul><li>The Hyundai Seoul</li><li>Yongsan I&apos;Park Mall</li><li>Yeouido Hangang Park</li></ul></article>
        </div>
        <p className="inline-link"><a href="https://english.visitseoul.net/" {...external}>Visit Seoul Official Tourism Website <ExternalLink size={15} aria-hidden="true" /></a></p>
        <p className="inline-link"><a href="https://en.seoulcitybus.com/" {...external}>Seoul City Tour Bus Information <ExternalLink size={15} aria-hidden="true" /></a></p>
      </section>
    </ConferenceShell>
  );
}

