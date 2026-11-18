// The archive: every entry of the Archive panel on the site, and its closing
// lines. Edit it with project-editor.html (Archive tab), or by hand.
//
// Each entry:
//   type      – exhibition, workshop, teaching, presentation, lecture, residency,
//               funding, projects, web-site, writing, graphic-design
//               (it decides the group in the Type view and the wording in the Year view)
//   name      – the title
//   year      – '2025', or a range like '2022-2025' or '2020/21'
//   month     – 1–12 (orders entries within a year; later than this month = upcoming, in grey)
//   location  – 'City, CC'
//   details   – 'Client or venue' or 'Client. Collaborators: Name, Name'
//   link      – a web address for the title, or ''
//   role      – optional: shown in the Year view as "<role> for <client>"
//   phrase    – optional: replaces the type's wording in the Year view ("tutoring at")
//   showInAll – optional: false hides the entry
window.ARCHIVE = [
  { type:'presentation', name:'Gathering stones in a circle', year:'2026', month:12, location:'Rotterdam, NL', details:'Nieuwe Instituut', link:'', phrase:'roundtable at' },
  { type:'residency', name:'As-Built', year:'2026', month:11, location:'Timișoara, RO', details:'FABER. Collaborator: Sonia Górecka', link:'', showInAll:false },
  { type:'graphic-design', name:'Graduation Catalogue 2026', year:'2026', month:9, location:'', details:'Design Academy Eindhoven', link:'https://designacademy.nl/page/10710/gs2026-catalogue', role:'Graphic Design' },
  { type:'exhibition', name:'Systems of Support', year:'2026', month:9, location:'Rotterdam, NL', details:'IABR. Collaborator: Studio Folder', link:'https://iabr.nl/en' },
  { type:'exhibition', name:'-1 DEMO', year:'2026', month:7, location:'Rotterdam, NL', details:'Nieuwe Instituut. Collaborator: Sonia Gorecka', link:'' },
  { type:'presentation', name:'New Approaches to Critical Geovisualisation', year:'2026', month:6, location:'Halle, DE', details:'Burg Halle', link:'https://www.burg-halle.de/artikel/a/neue-ansaetze-kritischer-geovisualisierung-2026' },
  { type:'workshop', name:'JPG Investigation Unit', year:'2026', month:3, location:'Milan, IT', details:'Accademia Aldo Galli', link:'' },
  { type:'residency', name:'-1 Digital Lab Residency', year:'2026', month:3, location:'Rotterdam, NL', details:'Het Nieuwe Instituut', link:'' },
  { type:'exhibition', name:'Shadow Circuits', year:'2026', month:3, location:'Rotterdam, NL', details:'MaMA', link:'' },
  { type:'exhibition', name:'To The Horizon', year:'2026', month:2, location:'Warsaw, PL', details:'Aspekty Gallery. Collaborator: Sonia Gorecka', link:'' },
  { type:'writing', name:'A Place Without a Name', year:'2026', month:1, location:'', details:'Metamorphic Zone', link:'https://metamorphiczone.com/field-notes/a-place-without-a-name' },
  { type:'web-site', name:'Literary Atlas of Volcanic and seismic Activities', year:'2025', month:12, location:'', details:'Università di Pisa. Collaborators: Federico Poni, Henry Albert, Alice Bisio', link:'https://prisma.fileli.unipi.it/' },
  { type:'exhibition', name:'Fuori Pista/Off-track', year:'2025', month:11, location:'Bergamo, IT', details:'GresArt 671. Collaborator: Studio Folder', link:'' },
  { type:'graphic-design', name:'International Summer School “Reimagining a museum”', year:'2025', month:7, location:'Turin, IT', details:'Torino Design City, Circolo del Design', link:'', role:'Information and Graphic Design' },
  { type:'exhibition', name:'Where to, from Here?', year:'2025', month:6, location:'Torino, IT', details:'Circolo del Design. Collaborator: Studio Folder', link:'' },
  { type:'exhibition', name:'Always Container, Sometimes Contained', year:'2025', month:6, location:'Rotterdam', details:'Oud House, part of Rotterdam Architecture Month', link:'' },
  { type:'funding', name:'Practical Contribution', year:'2025', month:5, location:'Rotterdam, NL', details:'CBK Rotterdam', link:'' },
  { type:'exhibition', name:'Emergence', year:'2025', month:4, location:'Genova, IT', details:'Palazzo Bronzo. Collaborator: Sonia Gorecka', link:'' },
  { type:'web-site', name:'Transmedia Research Institute 2025', year:'2025', month:4, location:'', details:'Transmedia Research Institute. Collaborator: Sonia Gorecka', link:'https://www.transmediaresearch.institute/2025' },
  { type:'funding', name:'Matching fund with Voordekunst', year:'2025', month:3, location:'Rotterdam, NL', details:'Het Cultuurfonds', link:'' },
  { type:'workshop', name:'Ultra Paesaggio Continuo: Photo-finish e osservatori mobili', year:'2025', month:3, location:'Torino, IT', details:'Circolo del Design. Collaborator: 4kHD', link:'' },
  { type:'graphic-design', name:'A Cartography in 25 Movements', year:'2025', location:'', details:'Studio Folder', link:'https://www.studiofolder.it/a-cartography-in-25-movements/', role:'Art Direction, Data Visualisation' },
  { type:'graphic-design', name:'Trésors sauvés de Gaza', year:'2025', location:'', details:'Studio Folder', link:'https://www.studiofolder.it/tresors-sauves-de-gaza-5000-ans-dhistoire/', role:'Graphic Design' },
  { type:'graphic-design', name:'Fragments of Democracy II', year:'2025', location:'', details:'Studio Folder', link:'https://www.studiofolder.it/fragments-of-democracy-ii/', role:'Art Direction, Data Visualisation' },
  { type:'web-site', name:'Tracking-IT, New Italian geographies of logistics', year:'2025', location:'', details:'DIST, Politecnico di Torino', link:'' },
  { type:'lecture', name:'Data Fragments', year:'2024', month:11, location:'Mendrisio, CH', details:'SUPSI. Collaborator: Studio Folder', link:'' },
  { type:'workshop', name:'Ultra Paesaggio Continuo: Laboratorio di immagini in movimento', year:'2024', month:10, location:'Treviso, IT', details:'Lost APS. Collaborator: 4kHD', link:'' },
  { type:'exhibition', name:'All in! Re-Designing Democracy', year:'2024', month:5, location:'Bonn, DE', details:'Bundeskunsthalle. Collaborator: Studio Folder', link:'' },
  { type:'workshop', name:'Anti-Navigation Tools', year:'2024', month:2, location:'Berlin, DE', details:'EKA Stand-in School. Collaborator: 4kHD', link:'https://stand-in.eka-gd-ma.ee/' },
  { type:'graphic-design', name:'Fragments of Democracy I', year:'2024', location:'', details:'Studio Folder', link:'https://www.studiofolder.it/fragments-of-democracy/', role:'Art Direction, Data Visualisation' },
  { type:'web-site', name:'Frontiere della Transizione', year:'2023', month:12, location:'', details:'Alberto Valz Gris. Collaborator: Luca Draisci', link:'https://frontieredellatransizione.it/' },
  { type:'presentation', name:'Racconti dai margini dell\'urbanizzazione', year:'2023', month:7, location:'Milan, IT', details:'Società Studi Geografici', link:'' },
  { type:'web-site', name:'Xenoplex, Antikythera 2023', year:'2023', month:4, location:'', details:'Antikythera. Collaborators: Jennifer Carniel, Filippo Elgorni', link:'https://xenoplex.org/' },
  { type:'workshop', name:'Archiving Memories Workshop', year:'2022', month:2, location:'Rotterdam, NL', details:'Hogeschool Rotterdam', link:'' },
  { type:'teaching', name:'Digital Methods Winter/Summer School', year:'2022-2025', month:1, location:'Amsterdam, NL', details:'University of Amsterdam', link:'https://www.digitalmethods.net/', phrase:'tutoring at' },
  { type:'teaching', name:'Density Design', year:'2020/21', month:9, location:'Milano, IT', details:'Politecnico di Milano, Teaching assistant', link:'https://densitydesign.org/' },
];

// the closing lines at the bottom of the archive: "<lead> <name> and <name>"
window.ARCHIVE_CLOSING = [
  { lead: 'Member of', names: [
      { name: '4kHD collective', link: 'https://4khd.pro/' },
      { name: 'Seesaw space', link: 'https://www.instagram.com/see.saw.see.saw/' } ] },
  { lead: 'Registered with', names: [
      { name: 'Centrum Beeldende Kunst Rotterdam', link: 'https://en.artoffice.info/kunstenaar/matteo-bettini/' } ] },
  { lead: 'For inquiries', names: [
      { name: 'mte.bettini@gmail.com', link: 'mailto:mte.bettini@gmail.com' } ] },
];
