import type { DJContent } from '../types/content'

export const djContent: DJContent = {
  seo: {
    title: 'Álvaro Redon | DJ / Speaker',
    description:
      'Web oficial y presskit digital de Álvaro Redon. DJ / speaker con identidad urbana, open format, reggaetón y afro house para salas, ferias y eventos.',
    siteUrl: 'https://dj-bdf.pages.dev',
    canonicalUrl: 'https://dj-bdf.pages.dev',
    ogImage: '/media/hero/alvaro-redon-hero-stage.jpg',
    twitterCard: 'summary_large_image',
    themeColor: '#ff2a4f',
  },
  theme: {
    accent: '#ff2a4f',
  },
  artist: {
    name: 'ÁLVARO REDON',
    logoText: 'AR',
    tagline: 'DJ / Speaker para salas, ferias y eventos',
  },
  navigation: [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Perfil' },
    { id: 'music', label: 'Sonido' },
    { id: 'gallery', label: 'Galería' },
    { id: 'dates', label: 'Escenarios' },
    { id: 'presskit', label: 'Presskit' },
    { id: 'booking', label: 'Booking' },
  ],
  hero: {
    kicker: 'Booking abierto 2026',
    claim:
      'Open format urbano, reggaetón y afro house para pistas que necesitan energía real.',
    backgroundImage: '/media/hero/alvaro-redon-hero-stage.jpg',
    backgroundPosition: '68% center',
    backgroundPositionMobile: '60% center',
    backgroundAlt:
      'Álvaro Redon sobre el escenario, de espaldas frente a una gran multitud nocturna.',
    primaryAction: {
      label: 'Reservar por WhatsApp',
      href: 'https://wa.me/34633269765?text=Hola%20%C3%81lvaro%2C%20quiero%20informaci%C3%B3n%20para%20un%20booking.',
      platform: 'whatsapp',
    },
    secondaryAction: {
      label: 'Descargar Presskit',
      href: '/media/presskit/Presskit_Alvaro_Redon.pdf',
      platform: 'website',
      download: true,
    },
    supportingText:
      'Booking activo en Córdoba, Andalucía, Extremadura y Castilla-La Mancha.',
  },
  about: {
    location: 'Córdoba y alrededores · Andalucía · Extremadura · Castilla-La Mancha',
    genres: ['Open Format', 'Urbano', 'Reggaetón', 'Afro House', 'Club Hits'],
    shortBio:
      'Álvaro Redon es un DJ / speaker con una propuesta urbana pensada para elevar la energía de la pista, leer al público en tiempo real y construir sesiones memorables con una conexión directa al micro.',
    longBio:
      'Su trayectoria ha evolucionado desde las primeras salas locales hasta distintos escenarios del sur y centro peninsular. Su identidad mezcla reggaetón, afro house, club hits y una selección abierta capaz de adaptarse al momento sin perder intención. La propuesta de Álvaro Redon combina show, criterio musical y versatilidad para salas, ferias, festivales y eventos donde la pista necesita energía real, continuidad y presencia.',
    portrait: '/media/branding/alvaro-redon-portrait-01.jpg',
    portraitAlt: 'Retrato de estudio de Álvaro Redon con gafas oscuras y camiseta negra.',
    highlights: [
      { label: 'Formato', value: 'DJ Set + Speaker' },
      { label: 'Territorio', value: 'Andalucía · Extremadura · Castilla-La Mancha' },
    ],
  },
  socialLinks: [
    {
      label: 'Instagram',
      href: 'https://instagram.com/alvaroredon_dj',
      platform: 'instagram',
      handle: '@alvaroredon_dj',
    },
    {
      label: 'SoundCloud',
      href: 'https://soundcloud.com/alvaro-redondo-553946965',
      platform: 'soundcloud',
      handle: 'soundcloud.com/alvaro-redondo-553946965',
    },
    {
      label: 'Spotify',
      href: 'https://open.spotify.com/user/xabi05?si=d932554f86b246a8',
      platform: 'spotify',
      handle: 'Playlists propias',
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/34633269765',
      platform: 'whatsapp',
      handle: '+34 633 269 765',
    },
    {
      label: 'Email',
      href: 'mailto:alvaroredondo04@gmail.com',
      platform: 'email',
      handle: 'alvaroredondo04@gmail.com',
    },
  ],
  music: {
    intro:
      'Escucha sesiones, descubre playlists propias y accede al material audiovisual que define el sonido y el formato de show de Álvaro Redon.',
    sessions: [
      {
        id: 'open-format-featured',
        title: 'Escucha en SoundCloud',
        cover: '/media/covers/sound-featured.png',
        coverAlt: 'Visual oficial de marca de Álvaro Redon.',
        date: 'Perfil oficial',
        genre: 'Reggaetón · Afro House · Club Hits',
        platform: 'SoundCloud',
        description:
          'Perfil oficial para escuchar sesiones, mezclas y nuevas subidas. Queda integrado como punto principal de escucha dentro de la web con reproductor embebido.',
        embedUrl:
          'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/alvaro-redondo-553946965&color=%23ff2a4f&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true',
        featured: true,
        links: [
          {
            label: 'SoundCloud',
            href: 'https://soundcloud.com/alvaro-redondo-553946965',
            platform: 'soundcloud',
          },
          {
            label: 'Spotify',
            href: 'https://open.spotify.com/user/xabi05?si=d932554f86b246a8',
            platform: 'spotify',
          },
        ],
      },
      {
        id: 'spotify-playlists',
        title: 'Playlists propias en Spotify',
        cover: '/media/covers/sound-02.jpg',
        coverAlt: 'Álvaro Redon pinchando en directo con iluminación de club.',
        date: 'Selección propia',
        genre: 'Inspiración · Curaduría · Referencias',
        platform: 'Spotify',
        description:
          'Perfil con playlists propias para enseñar referencias, criterio musical y universo sonoro más allá del directo.',
        links: [
          {
            label: 'Abrir Spotify',
            href: 'https://open.spotify.com/user/xabi05?si=d932554f86b246a8',
            platform: 'spotify',
          },
        ],
      },
      {
        id: 'dj-speaker',
        title: 'DJ Set + Speaker',
        cover: '/media/covers/sound-03.jpg',
        coverAlt: 'Álvaro Redon pinchando en directo con iluminación de club.',
        date: 'Formato de show',
        genre: 'Pista · Micro · Conexión',
        platform: 'Show en vivo',
        description:
          'Sesiones diseñadas para mantener la atención del público, generar momentos y sumar presencia escénica sin perder fluidez musical.',
        links: [
          {
            label: 'Booking',
            href: 'mailto:alvaroredondo04@gmail.com?subject=Booking%20%C3%81lvaro%20Redon',
            platform: 'email',
          },
        ],
      },
      {
        id: 'sound-base',
        title: 'Base Sonora',
        cover: '/media/covers/sound-04.jpg',
        coverAlt: 'Álvaro Redon actuando con luz cálida y azul en cabina.',
        date: 'Selección musical',
        genre: 'Open Format · Urbano',
        platform: 'Curaduría musical',
        description:
          'Reggaetón, afro house y club hits conviven en una sesión flexible, pensada para adaptarse al contexto sin perder pegada ni lectura de pista.',
        links: [
          {
            label: 'Instagram',
            href: 'https://instagram.com/alvaroredon_dj',
            platform: 'instagram',
          },
        ],
      },
      {
        id: 'promo-videos',
        title: 'Vídeos promocionales',
        cover: '/media/gallery/gallery-06.jpg',
        coverAlt: 'Álvaro Redon sobre escenario con el público al fondo.',
        date: 'Material audiovisual',
        genre: 'Live clips · Promo',
        platform: 'Drive',
        description:
          'Los vídeos promocionales pinchando están en el Drive público. Haz click en el enlace para acceder a los clips en directo y al material extra.',
        links: [
          {
            label: 'Abrir Drive',
            href: 'https://drive.google.com/drive/u/0/folders/1_e9oM66gpElrGsQTEXbzZewqZtqVIrFs',
            platform: 'website',
          },
        ],
      },
    ],
  },
  gallery: {
    intro:
      'Una selección de imágenes reales de cabina, escenario y retrato para enseñar tanto presencia escénica como identidad visual.',
    items: [
      {
        id: 'gallery-01',
        image: '/media/gallery/gallery-01.jpg',
        alt: 'Álvaro Redon actuando ante una gran pista en un evento nocturno.',
        caption: 'Escenario y pista',
        location: 'Jamon Rock 2024',
      },
      {
        id: 'gallery-02',
        image: '/media/gallery/gallery-02.jpg',
        alt: 'Álvaro Redon en cabina con camiseta roja durante un show.',
        caption: 'Cabina en directo',
        location: 'Show en sala',
      },
      {
        id: 'gallery-03',
        image: '/media/gallery/gallery-03.jpg',
        alt: 'Álvaro Redon actuando con iluminación cálida y azul.',
        caption: 'Club session',
        location: 'Directo',
      },
      {
        id: 'gallery-04',
        image: '/media/gallery/gallery-04.jpg',
        alt: 'Álvaro Redon en una imagen en blanco y negro con movimiento.',
        caption: 'Movimiento y atmósfera',
        location: 'Backstage / club',
      },
      {
        id: 'gallery-05',
        image: '/media/gallery/gallery-05.jpg',
        alt: 'Álvaro Redon en retrato de estudio con camiseta blanca.',
        caption: 'Retrato editorial',
        location: 'Sesión de estudio',
      },
      {
        id: 'gallery-06',
        image: '/media/gallery/gallery-06.jpg',
        alt: 'Álvaro Redon sobre escenario con el público al fondo.',
        caption: 'Conexión con el público',
        location: 'Escenario exterior',
      },
    ],
  },
  scene: {
    intro:
      'Una trayectoria en evolución constante, con experiencia en salas, ferias y escenarios donde la energía, la lectura de pista y la polivalencia marcan la diferencia.',
    milestones: [
      {
        title: 'Inicios',
        body:
          'Primeras sesiones en salas locales, construyendo criterio musical y presencia al micrófono.',
      },
      {
        title: 'Evolución',
        body:
          'Perfecciona un estilo propio: urbano, versátil y diseñado para generar momentos en pista.',
      },
      {
        title: 'Expansión',
        body:
          'Su propuesta recorre Andalucía, Extremadura y Castilla-La Mancha con actuaciones en contextos muy distintos.',
      },
      {
        title: 'Presente',
        body:
          'Consolida un formato profesional para salas, ferias y eventos de alta energía, adaptable al público y al entorno.',
      },
    ],
    venues: ['Impala', 'Límite', 'Vértigo', 'Saoko', 'Tempo', 'Wong', 'Olibar'],
    territories: [
      'Córdoba capital',
      'Hinojosa',
      'El Viso',
      'Belalcázar',
      'Belmez',
      'Pozoblanco',
      'Pedroche',
      'Peñarroya',
      'Almadén',
      'Azuaga',
    ],
    lineUp: [
      'Omar Montes',
      'Henry Méndez',
      'Xriz',
      'Les Castizos',
      'Dasoul',
      'Camela',
      'Pedro Calderón',
      'Jose de las Heras',
      'Juanjo García',
      'Alba Dreid',
      'Vilu Gontero',
    ],
  },
  presskit: {
    intro:
      'Todo el material clave de contratación en un mismo bloque: biografía, fotos, branding, presskit y acceso al Drive con vídeos promocionales y material extra.',
    officialPhotos: [
      {
        label: 'Foto oficial AR_2',
        description: 'Retrato de estudio en fondo blanco con sudadera azul y pose frontal.',
        file: '/media/presskit/official/AR_2.jpg',
        download: true,
      },
      {
        label: 'Foto oficial AR_3',
        description: 'Retrato con capucha azul, enfoque editorial y fondo limpio.',
        file: '/media/presskit/official/AR_3.jpg',
        download: true,
      },
      {
        label: 'Foto oficial AR_5',
        description: 'Retrato lateral con sudadera azul, listo para promo y presskit.',
        file: '/media/presskit/official/AR_5.jpg',
        download: true,
      },
      {
        label: 'Foto oficial AR_7',
        description: 'Retrato en camiseta blanca con pose limpia para material promocional.',
        file: '/media/presskit/official/AR_7.jpg',
        download: true,
      },
      {
        label: 'Foto oficial AR_15',
        description: 'Retrato en camiseta negra y gafas, con enfoque streetwear.',
        file: '/media/presskit/official/AR_15.jpg',
        download: true,
      },
      {
        label: 'Foto oficial AR_16',
        description: 'Retrato frontal con gafas oscuras para promos y creatividades.',
        file: '/media/presskit/official/AR_16.jpg',
        download: true,
      },
      {
        label: 'Foto oficial AR_21',
        description: 'Plano de espalda con camiseta negra y pose editorial.',
        file: '/media/presskit/official/AR_21.jpg',
        download: true,
      },
      {
        label: 'Foto oficial AR_23',
        description: 'Retrato con fondo negro y contraste fuerte para visuales potentes.',
        file: '/media/presskit/official/AR_23.jpg',
        download: true,
      },
      {
        label: 'Foto oficial AR_24',
        description: 'Perfil con luz roja y fondo oscuro para identidad escénica.',
        file: '/media/presskit/official/AR_24.jpg',
        download: true,
      },
      {
        label: 'Foto oficial AR_25',
        description: 'Primer plano con luz roja, ideal para portada y branding visual.',
        file: '/media/presskit/official/AR_25.jpg',
        download: true,
      },
    ],
    logos: [
      {
        label: 'Logo principal',
        description: 'Identidad visual principal de Álvaro Redon.',
        file: '/media/branding/alvaro-redon-logo.png',
        download: true,
      },
      {
        label: 'Banner oficial',
        description: 'Visual horizontal para promos, previews o soportes digitales.',
        file: '/media/hero/alvaro-redon-banner.png',
        download: true,
      },
    ],
    documents: [
      {
        label: 'Pack fotos oficiales en Drive',
        description:
          'Haz click para abrir el Drive público y acceder al pack completo de fotos oficiales en alta calidad.',
        file: 'https://drive.google.com/drive/u/0/folders/1_e9oM66gpElrGsQTEXbzZewqZtqVIrFs',
        download: false,
      },
      {
        label: 'Presskit 2026',
        description: 'Documento oficial con perfil artístico, trayectoria, rider y contacto.',
        file: '/media/presskit/Presskit_Alvaro_Redon.pdf',
        download: true,
      },
      {
        label: 'Vídeos promocionales en Drive',
        description:
          'Haz click para abrir el Drive público y acceder a los vídeos promocionales pinchando, además de material adicional.',
        file: 'https://drive.google.com/drive/u/0/folders/1_e9oM66gpElrGsQTEXbzZewqZtqVIrFs',
        download: false,
      },
      {
        label: 'Drive público completo',
        description: 'Carpeta pública con fotos, vídeos y material adicional compartido para revisión o descarga.',
        file: 'https://drive.google.com/drive/u/0/folders/1_e9oM66gpElrGsQTEXbzZewqZtqVIrFs',
        download: false,
      },
    ],
  },
  contact: {
    heading: 'Booking, salas y eventos',
    body:
      'Un show pensado para conectar con el público, elevar la energía de la pista y adaptar el sonido a cada evento.',
    email: 'alvaroredondo04@gmail.com',
    phone: '+34 633 269 765',
    phoneLabel: 'Teléfono / WhatsApp',
    bookingLabel: 'Booking',
    bookingEmail: 'alvaroredondo04@gmail.com',
    whatsapp: '+34633269765',
    primaryAction: {
      label: 'Reservar por WhatsApp',
      href: 'https://wa.me/34633269765?text=Hola%20%C3%81lvaro%2C%20quiero%20informaci%C3%B3n%20para%20un%20booking.',
      platform: 'whatsapp',
    },
  },
  footer: {
    eyebrow: 'Sitio oficial',
    description:
      'DJ / Speaker con identidad urbana para salas, ferias y eventos de alta energía.',
  },
}
