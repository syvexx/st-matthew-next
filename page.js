
"use client";
import { motion } from "framer-motion";
import { Clock, Phone, PlayCircle, Calendar, MapPin, Mail, Church as ChurchIcon, Users, HeartHandshake, BookOpenText, Baby, Music, Smile, ArrowRight } from "lucide-react";

const CHURCH = {
  name: "St. Matthew United Church of Christ",
  city: "Baltimore, MD",
  tagline: "Recognizing and nurturing the Christ in each person we encounter.",
  heroImage: "/hero.jpg",
  serviceTimes: [{ day: "Sundays", time: "Worship 10:30 AM", note: "Sanctuary service (children welcome)" }],
  address: "3400 Norman Ave, Baltimore, MD 21213-1027",
  phone: "(410) 918-8581",
  email: "smucc.balt@comcast.net",
  livestreamUrl: "https://www.facebook.com/p/St-Matthew-United-Church-of-Christ-100076962567515/",
  planVisitForm: "https://saintmatthewucc.org/contact-us/",
  newsletterForm: "https://saintmatthewucc.org/newsletter/",
};

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function Page() {
  return (
    <div>
      <div className="topbar">
        <div className="container flex items-center justify-between" style={{ padding: "8px 0" }}>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2"><Clock size={16}/> Sundays 10:30 AM</span>
            <a href={`tel:${CHURCH.phone}`} className="flex items-center gap-2"><Phone size={16}/>{CHURCH.phone}</a>
          </div>
          <div className="flex items-center gap-3">
            <a href={CHURCH.livestreamUrl} target="_blank" className="flex items-center gap-2"><PlayCircle size={16}/> Watch</a>
            <a href="#plan" className="flex items-center gap-2"><Calendar size={16}/> Plan Your Visit</a>
          </div>
        </div>
      </div>

      <header className="header">
        <nav className="container nav flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ChurchIcon size={28}/>
            <span className="brand">{CHURCH.name}</span>
          </div>
          <div className="flex items-center gap-6" style={{ fontSize: 14, fontWeight: 600 }}>
            <a href="#about">About</a>
            <a href="#times">Times & Location</a>
            <a href="#kids">Kids & Youth</a>
            <a href="#sermons">Messages</a>
            <a href="#events">Events</a>
            <a href="#faq">FAQ</a>
            <a href="#plan" className="btn">Plan a Visit</a>
          </div>
        </nav>
      </header>

      <section className="hero">
        <img src={CHURCH.heroImage} alt="Community gathering" />
        <div className="overlay" />
        <div className="container content">
          <motion.h1 variants={fadeUp} initial="hidden" whileInView="show" className="h1">
            A Church for {CHURCH.city}: {CHURCH.tagline}
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" whileInView="show" className="lead">
            New here? You are truly welcome. Come as you are—bring your questions, your kids, your story.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" style={{ marginTop: 16 }} className="flex gap-3">
            <a className="btn" href="#plan">Plan Your Visit <ArrowRight size={18} style={{ marginLeft: 8 }}/></a>
            <a className="btn light" href="#sermons"><PlayCircle size={18} style={{ marginRight: 8 }}/> Watch a Message</a>
          </motion.div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container grid grid-3">
          {[
            { icon: Users, title: "Real community", text: "Small groups and authentic friendships. Come as you are." },
            { icon: HeartHandshake, title: "Open doors", text: "Skeptical or returning to faith? You'll be heard and not pressured." },
            { icon: BookOpenText, title: "Rooted teaching", text: "Bible-centered, practical messages for modern life." },
          ].map(({ icon: Icon, title, text }, i) => (
            <div key={i} className="card">
              <h3 className="flex items-center gap-2"><Icon size={20}/>{title}</h3>
              <div className="small">{text}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="times" className="section" style={{ background: "#f8fafc" }}>
        <div className="container grid grid-2" style={{ gap: 32 }}>
          <div>
            <h2 style={{ fontSize: 32, fontWeight: 800, margin: 0 }}>Join us this week</h2>
            <p className="small" style={{ fontSize: 16, marginTop: 8, maxWidth: 560 }}>We keep services under 75 minutes with engaging music, a practical message, and simple kids check-in.</p>
            <div className="grid" style={{ marginTop: 16, gap: 16 }}>
              {CHURCH.serviceTimes.map((s, i) => (
                <div key={i} className="card">
                  <h3 className="flex items-center gap-2"><Clock size={18}/> {s.day}</h3>
                  <div style={{ fontWeight: 600 }}>{s.time}</div>
                  <div className="small">{s.note}</div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3" style={{ marginTop: 16 }}>
              <MapPin size={18}/><span>{CHURCH.address}</span>
            </div>
            <div className="flex gap-3" style={{ marginTop: 16 }}>
              <a className="btn" href={"https://maps.google.com/?q=" + encodeURIComponent(CHURCH.address)} target="_blank">Get Directions</a>
              <a className="btn outline" href="#plan">Plan a Visit</a>
            </div>
          </div>
          <div>
            <iframe title="Map" className="map" src={`https://www.google.com/maps?q=${encodeURIComponent(CHURCH.address)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
          </div>
        </div>
      </section>

      <section id="kids" className="section">
        <div className="container grid grid-2" style={{ gap: 32, alignItems: "center" }}>
          <div>
            <h2 className="flex items-center gap-3" style={{ fontSize: 32, fontWeight: 800, margin: 0 }}><Baby size={28}/> Kids & Youth love it here</h2>
            <p className="small" style={{ fontSize: 16, marginTop: 8 }}>Safe check-in, background-checked volunteers, age-appropriate classes, and a lot of joy.</p>
            <ul className="small" style={{ marginTop: 8 }}>
              <li>Nursery (0–2), Pre-K (3–5), Elementary, and Youth</li>
              <li>Secure check-in & allergy notes supported</li>
              <li>Sensory-friendly seating available</li>
            </ul>
          </div>
          <div className="grid grid-2" style={{ gap: 16 }}>
            {[
              { icon: Music, title: "Engaging worship" },
              { icon: Smile, title: "Friendly volunteers" },
              { icon: BookOpenText, title: "Bible-based lessons" },
              { icon: HeartHandshake, title: "Special needs support" },
            ].map(({ icon: Icon, title }, i) => (
              <div key={i} className="card"><h3 className="flex items-center gap-2"><Icon size={20}/>{title}</h3></div>
            ))}
          </div>
        </div>
      </section>

      <section id="sermons" className="section" style={{ background: "#f8fafc" }}>
        <div className="container">
          <div className="flex items-center justify-between">
            <h2 style={{ fontSize: 32, fontWeight: 800, margin: 0 }}>Watch a Message</h2>
            <a className="btn outline" href={CHURCH.livestreamUrl} target="_blank"><PlayCircle size={18} style={{ marginRight: 8 }}/> All Videos</a>
          </div>
          <div className="grid grid-3" style={{ marginTop: 16 }}>
            {[1, 2, 3].map(n => (
              <div key={n} className="card">
                <div style={{ background: "#e2e8f0", aspectRatio: "16/9", borderRadius: 12 }}/>
                <h3 style={{ marginTop: 12 }}>Message Title {n}</h3>
                <div className="small">Short description of the message and why it matters for everyday life.</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="section">
        <div className="container">
          <h2 style={{ fontSize: 32, fontWeight: 800, margin: 0 }}>What’s coming up</h2>
          <div className="grid grid-3" style={{ marginTop: 16 }}>
            {[1, 2, 3].map(n => (
              <div key={n} className="card">
                <h3 className="flex items-center gap-2"><Calendar size={18}/> Event Title {n}</h3>
                <div className="small">Date • Time • One-line description to invite newcomers.</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="plan" className="section" style={{ background: "#0b1220", color: "#fff" }}>
        <div className="container grid grid-2" style={{ gap: 32, alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: 32, fontWeight: 800, margin: 0 }}>Plan Your Visit</h2>
            <p style={{ opacity: .9, marginTop: 8, maxWidth: 560 }}>Let us save you a seat, help with kids check-in, and introduce you to a friendly face.</p>
            <ul className="small" style={{ marginTop: 8 }}>
              <li>Preferred service time & seating</li>
              <li>Kids check-in pre-registration</li>
              <li>Parking & accessibility guidance</li>
            </ul>
          </div>
          <form action={CHURCH.planVisitForm} method="GET" className="card" style={{ background: "#fff", color: "#0f172a" }}>
            <div className="grid" style={{ gap: 12 }}>
              <div><label>Name</label><input className="input" name="name" placeholder="Full name" required/></div>
              <div><label>Email</label><input className="input" type="email" name="email" placeholder="Email" required/></div>
              <div><label>Phone</label><input className="input" name="phone" placeholder="Phone (optional)"/></div>
              <div><label>Service time</label><input className="input" name="service" placeholder="10:30 AM"/></div>
              <div><label>Message</label><textarea className="input" name="message" placeholder="Anything we should know? (kids, accessibility, questions)" rows={4}/></div>
              <button className="btn" type="submit">I'm coming this week</button>
              <div className="small">We respect your privacy and won't spam you.</div>
            </div>
          </form>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{ fontSize: 32, fontWeight: 800, margin: 0 }}>Stories from people like you</h2>
          <div className="grid grid-3" style={{ marginTop: 16 }}>
            {["I felt at home on day one.", "My kids can't wait for Sundays.", "Practical teaching for my week."].map((q, i) => (
              <div key={i} className="card"><em>"{q}"</em></div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section" style={{ background: "#f8fafc" }}>
        <div className="container">
          <h2 style={{ fontSize: 32, fontWeight: 800, margin: 0 }}>What newcomers ask most</h2>
          <div className="grid" style={{ marginTop: 16, gap: 8 }}>
            <details className="card"><summary>What should I wear?</summary><div className="small">Come as you are—most people wear casual attire.</div></details>
            <details className="card"><summary>Is there parking?</summary><div className="small">Yes, free on-site parking with accessible spaces near the main entrance.</div></details>
            <details className="card"><summary>How does kids check-in work?</summary><div className="small">Stop by the Kids Check-In desk in the lobby. A volunteer will print matching tags for safety.</div></details>
            <details className="card"><summary>What do you believe?</summary><div className="small">We're centered on Jesus, the Bible, and loving our neighbors. Ask us anything when you visit.</div></details>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container" style={{ padding: "48px 0" }}>
          <div className="grid grid-3">
            <div><div className="flex items-center gap-3"><ChurchIcon size={20}/><strong>{CHURCH.name}</strong></div><p className="small" style={{ marginTop: 8 }}>{CHURCH.tagline}</p></div>
            <div><h4 style={{ margin: "0 0 8px 0" }}>Visit</h4><div className="small">{CHURCH.address}</div><div className="small" style={{ marginTop: 4 }}>Sundays 10:30 AM</div></div>
            <div><h4 style={{ margin: "0 0 8px 0" }}>Contact</h4><div className="small"><a href={`mailto:${CHURCH.email}`}><Mail size={14}/> {CHURCH.email}</a></div><div className="small" style={{ marginTop: 6 }}><a href={`tel:${CHURCH.phone}`}><Phone size={14}/> {CHURCH.phone}</a></div></div>
          </div>
          <hr style={{ margin: "24px 0" }}/>
          <div className="small">© {new Date().getFullYear()} {CHURCH.name}. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
