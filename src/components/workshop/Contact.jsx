import { personalInfo } from '../../Utils/data';
import { contact } from '../../Utils/content';
import { Hold, Marker } from './primitives';

const CHANNELS = [
  { label: personalInfo.email,   note: 'Email',              href: `mailto:${personalInfo.email}` },
  { label: 'Book a call',        note: 'Calendly, 30 min',   href: personalInfo.scheduling },
  { label: 'GitHub',             note: '@leonardegbaaibon',  href: personalInfo.github },
  { label: 'LinkedIn',           note: 'Full history',       href: personalInfo.linkedin },
  { label: 'YouTube',            note: '@yor-dev',           href: personalInfo.youtube },
];

const Contact = () => (
  <section id="contact" className="bg-olive py-14 text-sheet">
    <Hold>
      <Marker n="04" light>Contact</Marker>

      <div className="grid grid-cols-1 items-start gap-9 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h2 className="text-[clamp(28px,4.2vw,48px)] font-extrabold leading-none tracking-[-0.04em]">
            {contact.heading}{' '}
            <span className="font-serif font-normal italic tracking-[-0.02em] text-butter">
              {contact.headingSerif}
            </span>
          </h2>

          <p className="mb-5 mt-5 max-w-[58ch] text-lg text-sheet/85">{contact.intro}</p>
          <p className="max-w-[52ch] text-[15px] text-sheet/85">{contact.teaching}</p>
        </div>

        <div className="border-2 border-ink bg-sheet text-ink shadow-drop">
          {CHANNELS.map((c, i) => (
            <a
              key={c.note}
              href={c.href}
              target={c.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noreferrer"
              className={`flex items-center justify-between gap-3.5 px-[18px] py-3.5 text-[15px] font-bold tracking-[-0.02em] no-underline hover:bg-butter ${
                i < CHANNELS.length - 1 ? 'border-b-2 border-ink' : ''
              }`}
            >
              {c.label}
              <em className="font-mono text-[11px] font-normal not-italic text-faint">{c.note}</em>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-11 flex flex-wrap justify-between gap-4 font-mono text-[11.5px] text-sheet/60">
        <span>
          Written and built by {personalInfo.name}, Lagos. Set in Bricolage Grotesque, Fraunces and
          JetBrains Mono.
        </span>
        <span>{personalInfo.location}</span>
      </div>
    </Hold>
  </section>
);

export default Contact;
