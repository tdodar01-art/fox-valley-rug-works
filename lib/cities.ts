export interface City {
  slug: string;
  name: string;
  county: string;
  description: string;
  nearby: string[];
  meta: {
    title: string;
    description: string;
  };
}

export const cities: City[] = [
  // McHenry County
  {
    slug: 'crystal-lake',
    name: 'Crystal Lake',
    county: 'McHenry County',
    description: 'A vibrant community centered around its namesake lake, Crystal Lake features a charming downtown with well-maintained homes ranging from historic bungalows to newer subdivisions. Many residents here invest in quality home furnishings worth protecting.',
    nearby: ['mchenry', 'lake-in-the-hills', 'cary', 'algonquin', 'woodstock', 'bull-valley'],
    meta: {
      title: 'Rug Cleaning in Crystal Lake, IL | Fox Valley Rug Works',
      description: 'Expert area rug cleaning for Crystal Lake homeowners. Free pickup & delivery. Persian, Oriental, wool, silk & all rug types.',
    },
  },
  {
    slug: 'mchenry',
    name: 'McHenry',
    county: 'McHenry County',
    description: 'Situated along the Fox River, McHenry blends small-town character with easy access to the Chain O\u2019 Lakes. Homes here range from riverside properties to established neighborhoods with mature trees and spacious lots.',
    nearby: ['johnsburg', 'crystal-lake', 'bull-valley', 'island-lake', 'spring-grove', 'wonder-lake'],
    meta: {
      title: 'Rug Cleaning in McHenry, IL | Fox Valley Rug Works',
      description: 'Professional rug cleaning in McHenry, IL. Full immersion wash for all rug types. Free pickup & delivery available.',
    },
  },
  {
    slug: 'woodstock',
    name: 'Woodstock',
    county: 'McHenry County',
    description: 'Famous for its picturesque town square and Victorian architecture, Woodstock draws homeowners who appreciate craftsmanship and heritage. The historic homes here often feature fine rugs that deserve proper care.',
    nearby: ['crystal-lake', 'bull-valley', 'huntley', 'marengo', 'lakewood', 'harvard'],
    meta: {
      title: 'Rug Cleaning in Woodstock, IL | Fox Valley Rug Works',
      description: 'Area rug cleaning for Woodstock, IL residents. Expert care for Persian, Oriental & all rug types. Free estimates.',
    },
  },
  {
    slug: 'huntley',
    name: 'Huntley',
    county: 'McHenry County',
    description: 'One of the fastest-growing communities in McHenry County, Huntley is filled with newer construction and young families furnishing their homes with quality area rugs for the first time.',
    nearby: ['lake-in-the-hills', 'algonquin', 'gilberts', 'hampshire', 'woodstock', 'crystal-lake'],
    meta: {
      title: 'Rug Cleaning in Huntley, IL | Fox Valley Rug Works',
      description: 'Rug cleaning in Huntley, IL. Dedicated plant facility for deep cleaning all rug types. Free pickup & delivery.',
    },
  },
  {
    slug: 'lake-in-the-hills',
    name: 'Lake in the Hills',
    county: 'McHenry County',
    description: 'A family-friendly suburb with winding streets around small lakes and ponds, Lake in the Hills has well-kept homes with open floor plans where area rugs anchor living spaces.',
    nearby: ['crystal-lake', 'algonquin', 'huntley', 'cary', 'island-lake'],
    meta: {
      title: 'Rug Cleaning in Lake in the Hills, IL | Fox Valley Rug Works',
      description: 'Professional rug cleaning for Lake in the Hills. All rug types cleaned at our dedicated plant. Free estimates.',
    },
  },
  {
    slug: 'marengo',
    name: 'Marengo',
    county: 'McHenry County',
    description: 'A quiet farming community on the western edge of McHenry County, Marengo features historic homes along tree-lined streets and larger properties with room for the kind of statement rugs that need expert care.',
    nearby: ['woodstock', 'harvard', 'huntley', 'hampshire', 'prairie-grove'],
    meta: {
      title: 'Rug Cleaning in Marengo, IL | Fox Valley Rug Works',
      description: 'Area rug cleaning for Marengo, IL. Expert plant cleaning for wool, silk, Oriental & all rug types. Free pickup.',
    },
  },
  {
    slug: 'harvard',
    name: 'Harvard',
    county: 'McHenry County',
    description: 'Located near the Wisconsin border, Harvard is a close-knit community where families pass down heirlooms including fine area rugs. The mix of farmhouses and newer homes all benefit from professional rug care.',
    nearby: ['woodstock', 'marengo', 'richmond', 'wonder-lake'],
    meta: {
      title: 'Rug Cleaning in Harvard, IL | Fox Valley Rug Works',
      description: 'Rug cleaning in Harvard, IL. Professional plant cleaning for all rug types. Free pickup & delivery available.',
    },
  },
  {
    slug: 'bull-valley',
    name: 'Bull Valley',
    county: 'McHenry County',
    description: 'An affluent, low-density village with large estate properties set among rolling hills and wooded lots. Bull Valley homes frequently feature high-value Oriental and Persian rugs that demand specialized care.',
    nearby: ['woodstock', 'crystal-lake', 'mchenry', 'lakewood'],
    meta: {
      title: 'Rug Cleaning in Bull Valley, IL | Fox Valley Rug Works',
      description: 'Expert rug cleaning for Bull Valley estates. Specialized care for Persian, Oriental & fine handmade rugs.',
    },
  },
  {
    slug: 'cary',
    name: 'Cary',
    county: 'McHenry County',
    description: 'Nestled along the Fox River between Crystal Lake and Algonquin, Cary is a compact village with established neighborhoods and a walkable downtown that draws homeowners who value quality.',
    nearby: ['crystal-lake', 'fox-river-grove', 'algonquin', 'lake-in-the-hills', 'island-lake', 'barrington'],
    meta: {
      title: 'Rug Cleaning in Cary, IL | Fox Valley Rug Works',
      description: 'Professional rug cleaning for Cary, IL homeowners. All rug types. Free pickup & delivery within our service area.',
    },
  },
  {
    slug: 'island-lake',
    name: 'Island Lake',
    county: 'McHenry County',
    description: 'A small lakeside community straddling McHenry and Lake counties, Island Lake offers a mix of cozy cottages and updated homes where area rugs add warmth to living spaces year-round.',
    nearby: ['lake-in-the-hills', 'wauconda', 'cary', 'algonquin', 'fox-river-grove', 'crystal-lake'],
    meta: {
      title: 'Rug Cleaning in Island Lake, IL | Fox Valley Rug Works',
      description: 'Rug cleaning in Island Lake, IL. Dedicated rug cleaning plant. Free pickup & delivery. All rug types welcome.',
    },
  },
  {
    slug: 'algonquin',
    name: 'Algonquin',
    county: 'McHenry County',
    description: 'Straddling the Fox River across McHenry and Kane counties, Algonquin is a growing suburb with a mix of established ranch homes and newer developments. Families here appreciate the convenience of local rug care.',
    nearby: ['lake-in-the-hills', 'crystal-lake', 'cary', 'carpentersville', 'huntley', 'gilberts'],
    meta: {
      title: 'Rug Cleaning in Algonquin, IL | Fox Valley Rug Works',
      description: 'Area rug cleaning for Algonquin, IL. Expert plant cleaning for all types. Free pickup & delivery.',
    },
  },
  {
    slug: 'fox-river-grove',
    name: 'Fox River Grove',
    county: 'McHenry County',
    description: 'A small village at the confluence of the Fox River and Nippersink Creek, Fox River Grove has a laid-back, rivertown feel with modest homes and a tight-knit community.',
    nearby: ['cary', 'island-lake', 'barrington', 'wauconda', 'algonquin'],
    meta: {
      title: 'Rug Cleaning in Fox River Grove, IL | Fox Valley Rug Works',
      description: 'Professional rug cleaning for Fox River Grove. All rug types cleaned in our plant. Free estimates available.',
    },
  },
  {
    slug: 'spring-grove',
    name: 'Spring Grove',
    county: 'McHenry County',
    description: 'A rural community in northern McHenry County near the Chain O\u2019 Lakes, Spring Grove features larger lots and country properties where homeowners invest in durable, quality rugs.',
    nearby: ['mchenry', 'johnsburg', 'richmond', 'fox-lake', 'wonder-lake'],
    meta: {
      title: 'Rug Cleaning in Spring Grove, IL | Fox Valley Rug Works',
      description: 'Rug cleaning for Spring Grove, IL. Full plant cleaning for all rug types. Free pickup & delivery.',
    },
  },
  {
    slug: 'johnsburg',
    name: 'Johnsburg',
    county: 'McHenry County',
    description: 'Situated between McHenry and the Chain O\u2019 Lakes, Johnsburg is a growing community with newer subdivisions and lakefront properties. Many homeowners here have invested in fine area rugs for their living areas.',
    nearby: ['mchenry', 'spring-grove', 'fox-lake', 'island-lake', 'wonder-lake'],
    meta: {
      title: 'Rug Cleaning in Johnsburg, IL | Fox Valley Rug Works',
      description: 'Expert rug cleaning in Johnsburg, IL. All rug types. Dedicated plant facility. Free pickup & delivery.',
    },
  },
  {
    slug: 'lakewood',
    name: 'Lakewood',
    county: 'McHenry County',
    description: 'A quiet residential village near Woodstock surrounded by nature preserves, Lakewood attracts homeowners who value privacy and quality living \u2014 including proper care for their fine home furnishings.',
    nearby: ['woodstock', 'bull-valley', 'crystal-lake', 'marengo'],
    meta: {
      title: 'Rug Cleaning in Lakewood, IL | Fox Valley Rug Works',
      description: 'Area rug cleaning for Lakewood, IL residents. Dedicated plant facility. Free estimates and pickup available.',
    },
  },
  {
    slug: 'richmond',
    name: 'Richmond',
    county: 'McHenry County',
    description: 'A small village near the Wisconsin border known for its antique shops and rural character. Richmond\u2019s older homes and estates often contain heirloom rugs passed down through generations.',
    nearby: ['spring-grove', 'harvard', 'wonder-lake', 'mchenry'],
    meta: {
      title: 'Rug Cleaning in Richmond, IL | Fox Valley Rug Works',
      description: 'Rug cleaning in Richmond, IL. Expert care for antique, heirloom & all area rugs. Free pickup & delivery.',
    },
  },
  {
    slug: 'wonder-lake',
    name: 'Wonder Lake',
    county: 'McHenry County',
    description: 'A lakeside community in northern McHenry County, Wonder Lake offers a mix of year-round residences and seasonal homes. The area\u2019s relaxed character doesn\u2019t mean homeowners skimp on rug quality.',
    nearby: ['mchenry', 'richmond', 'spring-grove', 'harvard', 'johnsburg'],
    meta: {
      title: 'Rug Cleaning in Wonder Lake, IL | Fox Valley Rug Works',
      description: 'Professional rug cleaning for Wonder Lake, IL. All rug types. Free pickup & delivery within service area.',
    },
  },
  {
    slug: 'prairie-grove',
    name: 'Prairie Grove',
    county: 'McHenry County',
    description: 'A tiny rural village west of Crystal Lake, Prairie Grove is surrounded by farmland and open prairie. Residents here enjoy larger properties and the kind of spacious rooms where area rugs make a statement.',
    nearby: ['marengo', 'woodstock', 'huntley', 'hampshire'],
    meta: {
      title: 'Rug Cleaning in Prairie Grove, IL | Fox Valley Rug Works',
      description: 'Area rug cleaning for Prairie Grove, IL. Expert plant cleaning for all rug types. Free pickup available.',
    },
  },

  // Kane County
  {
    slug: 'elgin',
    name: 'Elgin',
    county: 'Kane County',
    description: 'One of the Fox Valley\u2019s largest cities, Elgin spans the Fox River with diverse neighborhoods ranging from historic Victorians to new construction. The city\u2019s rich architectural heritage means plenty of homes with fine rugs.',
    nearby: ['south-elgin', 'carpentersville', 'streamwood', 'hoffman-estates', 'hanover-park', 'st-charles'],
    meta: {
      title: 'Rug Cleaning in Elgin, IL | Fox Valley Rug Works',
      description: 'Expert rug cleaning in Elgin, IL. Full immersion plant cleaning for all rug types. Free pickup & delivery.',
    },
  },
  {
    slug: 'st-charles',
    name: 'St. Charles',
    county: 'Kane County',
    description: 'An upscale Fox River community known for its charming downtown, excellent schools, and beautiful homes. St. Charles residents frequently own high-value Oriental and Persian rugs that require specialized cleaning.',
    nearby: ['geneva', 'south-elgin', 'batavia', 'elgin', 'west-chicago', 'carol-stream'],
    meta: {
      title: 'Rug Cleaning in St. Charles, IL | Fox Valley Rug Works',
      description: 'Premium rug cleaning for St. Charles, IL. Expert care for Persian, Oriental & fine area rugs. Free estimates.',
    },
  },
  {
    slug: 'geneva',
    name: 'Geneva',
    county: 'Kane County',
    description: 'Geneva\u2019s tree-lined streets, boutique-filled Third Street, and stately homes along the Fox River make it one of the most desirable suburbs in the region. Homeowners here invest in quality furnishings worth protecting.',
    nearby: ['st-charles', 'batavia', 'north-aurora', 'west-chicago', 'lily-lake'],
    meta: {
      title: 'Rug Cleaning in Geneva, IL | Fox Valley Rug Works',
      description: 'Area rug cleaning for Geneva, IL. Dedicated plant facility for fine rug care. Free pickup & delivery.',
    },
  },
  {
    slug: 'batavia',
    name: 'Batavia',
    county: 'Kane County',
    description: 'The oldest city in Kane County, Batavia sits along the Fox River with a mix of historic limestone homes and newer developments. The Windmill City has a strong sense of heritage that extends to its residents\u2019 home furnishings.',
    nearby: ['geneva', 'north-aurora', 'st-charles', 'west-chicago', 'warrenville', 'naperville'],
    meta: {
      title: 'Rug Cleaning in Batavia, IL | Fox Valley Rug Works',
      description: 'Professional rug cleaning in Batavia, IL. All rug types. Dedicated cleaning plant. Free pickup & delivery.',
    },
  },
  {
    slug: 'south-elgin',
    name: 'South Elgin',
    county: 'Kane County',
    description: 'Located along the Fox River between Elgin and St. Charles, South Elgin offers a suburban feel with parks, trails, and neighborhoods where families create comfortable homes with quality area rugs.',
    nearby: ['elgin', 'st-charles', 'carpentersville', 'streamwood', 'carol-stream', 'west-chicago'],
    meta: {
      title: 'Rug Cleaning in South Elgin, IL | Fox Valley Rug Works',
      description: 'Rug cleaning for South Elgin, IL homeowners. Expert plant cleaning for all types. Free estimates.',
    },
  },
  {
    slug: 'carpentersville',
    name: 'Carpentersville',
    county: 'Kane County',
    description: 'A diverse Fox River community with a growing downtown and established residential neighborhoods, Carpentersville connects McHenry County communities to the greater Kane County area.',
    nearby: ['algonquin', 'elgin', 'south-elgin', 'gilberts', 'east-dundee'],
    meta: {
      title: 'Rug Cleaning in Carpentersville, IL | Fox Valley Rug Works',
      description: 'Area rug cleaning in Carpentersville, IL. All rug types. Free pickup & delivery within service area.',
    },
  },
  {
    slug: 'hampshire',
    name: 'Hampshire',
    county: 'Kane County',
    description: 'A small but growing community on Kane County\u2019s western edge, Hampshire retains its small-town feel with newer subdivisions on the outskirts and a historic downtown core.',
    nearby: ['huntley', 'gilberts', 'pingree-grove', 'marengo', 'burlington'],
    meta: {
      title: 'Rug Cleaning in Hampshire, IL | Fox Valley Rug Works',
      description: 'Professional rug cleaning for Hampshire, IL. Dedicated plant facility. All rug types. Free pickup available.',
    },
  },
  {
    slug: 'burlington',
    name: 'Burlington',
    county: 'Kane County',
    description: 'A rural unincorporated area in western Kane County, Burlington features farmsteads and larger properties where homeowners take pride in their homes and the quality furnishings within them.',
    nearby: ['hampshire', 'maple-park', 'lily-lake', 'pingree-grove', 'sugar-grove'],
    meta: {
      title: 'Rug Cleaning in Burlington, IL | Fox Valley Rug Works',
      description: 'Rug cleaning for Burlington, IL residents. Expert care for all rug types. Free pickup & delivery.',
    },
  },
  {
    slug: 'gilberts',
    name: 'Gilberts',
    county: 'Kane County',
    description: 'Once a quiet farming village, Gilberts has grown rapidly with newer subdivisions attracting young families who are furnishing their homes and discovering the value of professional rug care.',
    nearby: ['huntley', 'algonquin', 'carpentersville', 'hampshire', 'pingree-grove'],
    meta: {
      title: 'Rug Cleaning in Gilberts, IL | Fox Valley Rug Works',
      description: 'Area rug cleaning in Gilberts, IL. Full immersion plant cleaning. Free pickup & delivery available.',
    },
  },
  {
    slug: 'pingree-grove',
    name: 'Pingree Grove',
    county: 'Kane County',
    description: 'A rapidly developing community between Huntley and Elgin, Pingree Grove features master-planned neighborhoods with newer homes where quality area rugs are a popular design choice.',
    nearby: ['gilberts', 'hampshire', 'huntley', 'carpentersville', 'south-elgin'],
    meta: {
      title: 'Rug Cleaning in Pingree Grove, IL | Fox Valley Rug Works',
      description: 'Rug cleaning for Pingree Grove, IL. Expert plant cleaning for all rug types. Free estimates.',
    },
  },
  {
    slug: 'north-aurora',
    name: 'North Aurora',
    county: 'Kane County',
    description: 'A Fox River village south of Batavia with a blend of established neighborhoods and newer developments. North Aurora\u2019s proximity to Geneva and Batavia means many residents share those communities\u2019 taste for quality.',
    nearby: ['batavia', 'geneva', 'sugar-grove', 'naperville', 'west-chicago'],
    meta: {
      title: 'Rug Cleaning in North Aurora, IL | Fox Valley Rug Works',
      description: 'Professional rug cleaning in North Aurora, IL. All rug types. Dedicated facility. Free pickup & delivery.',
    },
  },
  {
    slug: 'sugar-grove',
    name: 'Sugar Grove',
    county: 'Kane County',
    description: 'A semi-rural community in southern Kane County with newer subdivisions set among open farmland. Sugar Grove residents enjoy spacious homes where area rugs define living spaces.',
    nearby: ['north-aurora', 'batavia', 'naperville', 'burlington', 'maple-park'],
    meta: {
      title: 'Rug Cleaning in Sugar Grove, IL | Fox Valley Rug Works',
      description: 'Area rug cleaning for Sugar Grove, IL. Expert plant cleaning. All types welcome. Free pickup & delivery.',
    },
  },
  {
    slug: 'maple-park',
    name: 'Maple Park',
    county: 'Kane County',
    description: 'A small village in rural western Kane County where larger lots and farmhouse-style living are the norm. Maple Park homeowners value the personal service that comes with a local rug cleaning plant.',
    nearby: ['burlington', 'sugar-grove', 'lily-lake', 'west-chicago', 'hampshire'],
    meta: {
      title: 'Rug Cleaning in Maple Park, IL | Fox Valley Rug Works',
      description: 'Rug cleaning in Maple Park, IL. Dedicated plant cleaning for all rug types. Free estimates available.',
    },
  },
  {
    slug: 'lily-lake',
    name: 'Lily Lake',
    county: 'Kane County',
    description: 'A quiet, unincorporated community between St. Charles and the rural west, Lily Lake features country properties and hobby farms where homeowners appreciate personalized care for their fine rugs.',
    nearby: ['geneva', 'st-charles', 'maple-park', 'burlington', 'west-chicago'],
    meta: {
      title: 'Rug Cleaning in Lily Lake, IL | Fox Valley Rug Works',
      description: 'Area rug cleaning for Lily Lake, IL. Professional plant cleaning. All rug types. Free pickup & delivery.',
    },
  },

  // Lake County
  {
    slug: 'barrington',
    name: 'Barrington',
    county: 'Lake County',
    description: 'An affluent village known for its upscale downtown, equestrian properties, and beautifully appointed homes. Barrington residents are among those most likely to own high-value handmade rugs deserving expert care.',
    nearby: ['lake-zurich', 'deer-park', 'south-barrington', 'inverness', 'cary', 'fox-river-grove', 'barrington-hills'],
    meta: {
      title: 'Rug Cleaning in Barrington, IL | Fox Valley Rug Works',
      description: 'Premium rug cleaning for Barrington, IL. Expert care for fine Persian, Oriental & handmade rugs. Free estimates.',
    },
  },
  {
    slug: 'lake-zurich',
    name: 'Lake Zurich',
    county: 'Lake County',
    description: 'Built around its scenic lake, Lake Zurich is a well-regarded suburb with excellent schools and neighborhoods ranging from lakefront homes to newer subdivisions with modern floor plans.',
    nearby: ['barrington', 'deer-park', 'kildeer', 'hawthorn-woods', 'wauconda', 'long-grove'],
    meta: {
      title: 'Rug Cleaning in Lake Zurich, IL | Fox Valley Rug Works',
      description: 'Rug cleaning for Lake Zurich, IL. Dedicated plant facility for all rug types. Free pickup & delivery.',
    },
  },
  {
    slug: 'wauconda',
    name: 'Wauconda',
    county: 'Lake County',
    description: 'A lakeside community with a small-town downtown and mix of older homes and newer developments. Wauconda sits at the crossroads of McHenry and Lake counties, making our plant a convenient choice.',
    nearby: ['island-lake', 'lake-zurich', 'fox-lake', 'round-lake', 'barrington'],
    meta: {
      title: 'Rug Cleaning in Wauconda, IL | Fox Valley Rug Works',
      description: 'Area rug cleaning in Wauconda, IL. Professional plant cleaning for all types. Free pickup & delivery.',
    },
  },
  {
    slug: 'mundelein',
    name: 'Mundelein',
    county: 'Lake County',
    description: 'A diverse, family-oriented suburb with a revitalized downtown and solid residential neighborhoods. Mundelein offers great value, and its homeowners appreciate the same in their rug care.',
    nearby: ['libertyville', 'hawthorn-woods', 'lake-zurich', 'grayslake', 'long-grove', 'round-lake'],
    meta: {
      title: 'Rug Cleaning in Mundelein, IL | Fox Valley Rug Works',
      description: 'Professional rug cleaning for Mundelein, IL. All rug types. Free estimates and pickup available.',
    },
  },
  {
    slug: 'libertyville',
    name: 'Libertyville',
    county: 'Lake County',
    description: 'A prestigious suburb with a vibrant downtown, tree-lined streets, and homes that reflect its residents\u2019 attention to quality. Libertyville homeowners often have collections of fine area rugs throughout their homes.',
    nearby: ['mundelein', 'hawthorn-woods', 'long-grove', 'grayslake', 'lake-zurich'],
    meta: {
      title: 'Rug Cleaning in Libertyville, IL | Fox Valley Rug Works',
      description: 'Expert rug cleaning in Libertyville, IL. Fine rug care for Persian, Oriental & all types. Free estimates.',
    },
  },
  {
    slug: 'grayslake',
    name: 'Grayslake',
    county: 'Lake County',
    description: 'A growing community with a charming downtown and mix of older homes and master-planned neighborhoods. Grayslake\u2019s central Lake County location makes it easy to reach our plant.',
    nearby: ['round-lake', 'mundelein', 'libertyville', 'lake-villa', 'wauconda'],
    meta: {
      title: 'Rug Cleaning in Grayslake, IL | Fox Valley Rug Works',
      description: 'Rug cleaning for Grayslake, IL homeowners. Dedicated plant facility. All rug types. Free pickup & delivery.',
    },
  },
  {
    slug: 'round-lake',
    name: 'Round Lake',
    county: 'Lake County',
    description: 'A collection of lake communities in central Lake County, the Round Lake area features affordable homes and a growing population of families who want quality rug care without the premium-suburb pricing.',
    nearby: ['grayslake', 'lake-villa', 'wauconda', 'fox-lake', 'mundelein'],
    meta: {
      title: 'Rug Cleaning in Round Lake, IL | Fox Valley Rug Works',
      description: 'Area rug cleaning in Round Lake, IL. Professional plant cleaning. All types welcome. Free pickup.',
    },
  },
  {
    slug: 'fox-lake',
    name: 'Fox Lake',
    county: 'Lake County',
    description: 'At the heart of the Chain O\u2019 Lakes region, Fox Lake draws both year-round residents and seasonal visitors. The area\u2019s lake homes often feature area rugs that take a beating from foot traffic and need regular professional cleaning.',
    nearby: ['round-lake', 'lake-villa', 'antioch', 'wauconda', 'spring-grove', 'johnsburg'],
    meta: {
      title: 'Rug Cleaning in Fox Lake, IL | Fox Valley Rug Works',
      description: 'Professional rug cleaning for Fox Lake, IL. All rug types. Free pickup & delivery within service area.',
    },
  },
  {
    slug: 'antioch',
    name: 'Antioch',
    county: 'Lake County',
    description: 'A lakeside village near the Wisconsin border with a quaint downtown and neighborhoods surrounded by lakes and nature preserves. Antioch homeowners enjoy a quieter lifestyle with well-furnished homes.',
    nearby: ['fox-lake', 'lake-villa', 'round-lake', 'spring-grove'],
    meta: {
      title: 'Rug Cleaning in Antioch, IL | Fox Valley Rug Works',
      description: 'Rug cleaning in Antioch, IL. Expert plant cleaning for all rug types. Free estimates and pickup available.',
    },
  },
  {
    slug: 'lake-villa',
    name: 'Lake Villa',
    county: 'Lake County',
    description: 'A quiet community between Grayslake and the Chain O\u2019 Lakes, Lake Villa offers a relaxed suburban setting with well-maintained homes and families who value quality home care services.',
    nearby: ['round-lake', 'grayslake', 'antioch', 'fox-lake', 'wauconda'],
    meta: {
      title: 'Rug Cleaning in Lake Villa, IL | Fox Valley Rug Works',
      description: 'Area rug cleaning for Lake Villa, IL. Professional plant facility. All types. Free pickup & delivery.',
    },
  },
  {
    slug: 'long-grove',
    name: 'Long Grove',
    county: 'Lake County',
    description: 'Known for its historic covered bridge and chocolate shops, Long Grove is an affluent, low-density village with large estate homes. The quality of furnishings here \u2014 including fine rugs \u2014 reflects the community\u2019s character.',
    nearby: ['kildeer', 'hawthorn-woods', 'lake-zurich', 'deer-park', 'libertyville', 'mundelein'],
    meta: {
      title: 'Rug Cleaning in Long Grove, IL | Fox Valley Rug Works',
      description: 'Premium rug cleaning for Long Grove, IL. Specialized care for fine & handmade rugs. Free estimates.',
    },
  },
  {
    slug: 'hawthorn-woods',
    name: 'Hawthorn Woods',
    county: 'Lake County',
    description: 'An upscale residential village with large-lot homes, equestrian properties, and a semi-rural feel. Hawthorn Woods residents often own investment-quality rugs that require expert handling.',
    nearby: ['lake-zurich', 'long-grove', 'kildeer', 'mundelein', 'libertyville', 'wauconda'],
    meta: {
      title: 'Rug Cleaning in Hawthorn Woods, IL | Fox Valley Rug Works',
      description: 'Expert rug cleaning for Hawthorn Woods, IL. Fine rug care in our dedicated plant. Free pickup & delivery.',
    },
  },
  {
    slug: 'kildeer',
    name: 'Kildeer',
    county: 'Lake County',
    description: 'An exclusive residential village adjacent to Long Grove and Deer Park, Kildeer features large custom homes and a private, wooded setting. Residents here expect premium service for their premium rugs.',
    nearby: ['long-grove', 'lake-zurich', 'deer-park', 'hawthorn-woods', 'barrington'],
    meta: {
      title: 'Rug Cleaning in Kildeer, IL | Fox Valley Rug Works',
      description: 'Premium rug cleaning for Kildeer, IL. Expert care for Persian, Oriental & luxury area rugs.',
    },
  },
  {
    slug: 'deer-park',
    name: 'Deer Park',
    county: 'Lake County',
    description: 'A small, affluent village near Barrington and Lake Zurich with custom homes on wooded lots. Deer Park homeowners have discerning taste in home furnishings, including high-quality area rugs.',
    nearby: ['barrington', 'lake-zurich', 'kildeer', 'long-grove', 'palatine'],
    meta: {
      title: 'Rug Cleaning in Deer Park, IL | Fox Valley Rug Works',
      description: 'Area rug cleaning for Deer Park, IL. Specialized care for fine rugs. Free estimates available.',
    },
  },

  // Northwest Cook County
  {
    slug: 'schaumburg',
    name: 'Schaumburg',
    county: 'Cook County',
    description: 'A major suburban hub home to Woodfield Mall and a thriving business district, Schaumburg has diverse residential neighborhoods from condos to executive homes, all within easy reach of our plant.',
    nearby: ['hoffman-estates', 'rolling-meadows', 'elk-grove-village', 'streamwood', 'hanover-park', 'palatine'],
    meta: {
      title: 'Rug Cleaning in Schaumburg, IL | Fox Valley Rug Works',
      description: 'Professional rug cleaning for Schaumburg, IL. All rug types. Dedicated plant facility. Free estimates.',
    },
  },
  {
    slug: 'hoffman-estates',
    name: 'Hoffman Estates',
    county: 'Cook County',
    description: 'A sprawling suburb spanning from the Poplar Creek area to the Prairie Stone campus, Hoffman Estates offers diverse housing from starter homes to upscale enclaves like the Highlands of Hoffman.',
    nearby: ['schaumburg', 'streamwood', 'south-barrington', 'inverness', 'palatine', 'elgin'],
    meta: {
      title: 'Rug Cleaning in Hoffman Estates, IL | Fox Valley Rug Works',
      description: 'Rug cleaning in Hoffman Estates, IL. Expert plant cleaning for all rug types. Free pickup & delivery.',
    },
  },
  {
    slug: 'arlington-heights',
    name: 'Arlington Heights',
    county: 'Cook County',
    description: 'One of the northwest suburbs\u2019 most established communities, Arlington Heights features a vibrant downtown, mature neighborhoods, and homes where quality area rugs are a staple of comfortable living.',
    nearby: ['palatine', 'mount-prospect', 'rolling-meadows', 'prospect-heights', 'elk-grove-village', 'des-plaines'],
    meta: {
      title: 'Rug Cleaning in Arlington Heights, IL | Fox Valley Rug Works',
      description: 'Expert rug cleaning for Arlington Heights, IL. All rug types. Free pickup & delivery available.',
    },
  },
  {
    slug: 'palatine',
    name: 'Palatine',
    county: 'Cook County',
    description: 'A well-rounded suburb with a walkable downtown, strong schools, and residential areas ranging from townhomes to estate properties. Palatine is centrally located between our plant and Chicago.',
    nearby: ['arlington-heights', 'rolling-meadows', 'hoffman-estates', 'inverness', 'schaumburg', 'deer-park', 'barrington'],
    meta: {
      title: 'Rug Cleaning in Palatine, IL | Fox Valley Rug Works',
      description: 'Area rug cleaning for Palatine, IL. Professional plant cleaning for all types. Free estimates.',
    },
  },
  {
    slug: 'rolling-meadows',
    name: 'Rolling Meadows',
    county: 'Cook County',
    description: 'A classic mid-century suburb with well-kept ranch homes and split-levels, Rolling Meadows offers solid value and a community feel. Many homes here have original hardwood floors anchored by quality area rugs.',
    nearby: ['arlington-heights', 'palatine', 'schaumburg', 'elk-grove-village', 'mount-prospect'],
    meta: {
      title: 'Rug Cleaning in Rolling Meadows, IL | Fox Valley Rug Works',
      description: 'Professional rug cleaning for Rolling Meadows, IL. Dedicated facility. All types. Free pickup.',
    },
  },
  {
    slug: 'elk-grove-village',
    name: 'Elk Grove Village',
    county: 'Cook County',
    description: 'Known for its massive industrial park and solid residential neighborhoods, Elk Grove Village is a practical, well-maintained community where homeowners appreciate straightforward, quality service.',
    nearby: ['arlington-heights', 'rolling-meadows', 'schaumburg', 'mount-prospect', 'des-plaines'],
    meta: {
      title: 'Rug Cleaning in Elk Grove Village, IL | Fox Valley Rug Works',
      description: 'Rug cleaning in Elk Grove Village, IL. All rug types. Dedicated plant. Free estimates available.',
    },
  },
  {
    slug: 'mount-prospect',
    name: 'Mount Prospect',
    county: 'Cook County',
    description: 'A family-friendly suburb with a charming downtown along Northwest Highway, Mount Prospect has a mix of post-war homes and newer constructions. The community\u2019s strong sense of home pride extends to fine rug care.',
    nearby: ['arlington-heights', 'prospect-heights', 'des-plaines', 'elk-grove-village', 'rolling-meadows'],
    meta: {
      title: 'Rug Cleaning in Mount Prospect, IL | Fox Valley Rug Works',
      description: 'Area rug cleaning for Mount Prospect, IL. Expert care for all rug types. Free pickup & delivery.',
    },
  },
  {
    slug: 'prospect-heights',
    name: 'Prospect Heights',
    county: 'Cook County',
    description: 'A compact suburb nestled between Arlington Heights and Wheeling, Prospect Heights offers a quiet residential setting with easy expressway access and homeowners who value convenience and quality.',
    nearby: ['arlington-heights', 'mount-prospect', 'des-plaines', 'palatine'],
    meta: {
      title: 'Rug Cleaning in Prospect Heights, IL | Fox Valley Rug Works',
      description: 'Rug cleaning for Prospect Heights, IL. Dedicated plant facility. All types welcome. Free estimates.',
    },
  },
  {
    slug: 'des-plaines',
    name: 'Des Plaines',
    county: 'Cook County',
    description: 'A diverse, densely populated suburb near O\u2019Hare with a mix of residential styles from Cape Cods to modern condos. Des Plaines\u2019 multicultural community brings a wide variety of fine rugs from around the world.',
    nearby: ['mount-prospect', 'park-ridge', 'arlington-heights', 'elk-grove-village', 'prospect-heights'],
    meta: {
      title: 'Rug Cleaning in Des Plaines, IL | Fox Valley Rug Works',
      description: 'Professional rug cleaning in Des Plaines, IL. All rug types including Persian & Oriental. Free estimates.',
    },
  },
  {
    slug: 'park-ridge',
    name: 'Park Ridge',
    county: 'Cook County',
    description: 'A prestigious inner-ring suburb known for its tree-lined streets, excellent schools, and well-maintained homes. Park Ridge residents take pride in their homes and the fine furnishings within them.',
    nearby: ['des-plaines', 'mount-prospect', 'arlington-heights', 'elk-grove-village'],
    meta: {
      title: 'Rug Cleaning in Park Ridge, IL | Fox Valley Rug Works',
      description: 'Expert rug cleaning for Park Ridge, IL. Fine rug care for all types. Free pickup & delivery available.',
    },
  },
  {
    slug: 'inverness',
    name: 'Inverness',
    county: 'Cook County',
    description: 'An exclusive, wooded village with large estate homes on multi-acre lots. Inverness is one of the most affluent communities in the northwest suburbs, and its residents expect the highest level of rug care.',
    nearby: ['palatine', 'hoffman-estates', 'south-barrington', 'barrington', 'barrington-hills'],
    meta: {
      title: 'Rug Cleaning in Inverness, IL | Fox Valley Rug Works',
      description: 'Premium rug cleaning for Inverness, IL estates. Specialized care for fine & luxury area rugs.',
    },
  },
  {
    slug: 'south-barrington',
    name: 'South Barrington',
    county: 'Cook County',
    description: 'Home to grand estates and gated communities, South Barrington is one of the wealthiest villages in Illinois. The custom homes here frequently feature museum-quality rugs from around the world.',
    nearby: ['hoffman-estates', 'inverness', 'barrington', 'barrington-hills', 'palatine', 'schaumburg'],
    meta: {
      title: 'Rug Cleaning in South Barrington, IL | Fox Valley Rug Works',
      description: 'Premium rug cleaning for South Barrington, IL. Expert care for fine Persian, Oriental & luxury rugs.',
    },
  },
  {
    slug: 'barrington-hills',
    name: 'Barrington Hills',
    county: 'Cook County',
    description: 'The crown jewel of Chicago\u2019s horse country, Barrington Hills features sprawling estates on 5+ acre lots surrounded by rolling hills. These homes contain some of the finest rug collections in the region.',
    nearby: ['barrington', 'south-barrington', 'inverness', 'algonquin', 'carpentersville'],
    meta: {
      title: 'Rug Cleaning in Barrington Hills, IL | Fox Valley Rug Works',
      description: 'Premium rug cleaning for Barrington Hills estates. Expert care for heirloom & investment-quality rugs.',
    },
  },
  {
    slug: 'streamwood',
    name: 'Streamwood',
    county: 'Cook County',
    description: 'A mid-size suburb between Schaumburg and Elgin with a diverse population and neighborhoods of well-maintained ranch homes and bi-levels. Streamwood\u2019s central location makes plant drop-off easy.',
    nearby: ['schaumburg', 'hoffman-estates', 'hanover-park', 'elgin', 'south-elgin', 'carol-stream'],
    meta: {
      title: 'Rug Cleaning in Streamwood, IL | Fox Valley Rug Works',
      description: 'Rug cleaning in Streamwood, IL. Professional plant cleaning for all rug types. Free pickup & delivery.',
    },
  },
  {
    slug: 'hanover-park',
    name: 'Hanover Park',
    county: 'Cook County',
    description: 'A diverse suburb spanning Cook and DuPage counties, Hanover Park features affordable housing and a multicultural community. Residents here bring rugs from their heritage cultures that deserve proper care.',
    nearby: ['streamwood', 'schaumburg', 'carol-stream', 'bloomingdale', 'roselle', 'elgin'],
    meta: {
      title: 'Rug Cleaning in Hanover Park, IL | Fox Valley Rug Works',
      description: 'Area rug cleaning for Hanover Park, IL. All rug types. Dedicated plant facility. Free estimates.',
    },
  },

  // DuPage County
  {
    slug: 'naperville',
    name: 'Naperville',
    county: 'DuPage County',
    description: 'Consistently ranked among America\u2019s best places to live, Naperville features a stunning downtown Riverwalk, top schools, and beautiful homes. This is a community that invests in quality \u2014 including their rugs.',
    nearby: ['wheaton', 'warrenville', 'north-aurora', 'batavia', 'glen-ellyn', 'winfield'],
    meta: {
      title: 'Rug Cleaning in Naperville, IL | Fox Valley Rug Works',
      description: 'Expert rug cleaning for Naperville, IL. Premium care for all rug types. Free pickup & delivery.',
    },
  },
  {
    slug: 'wheaton',
    name: 'Wheaton',
    county: 'DuPage County',
    description: 'The DuPage County seat, Wheaton is known for its college-town charm, historic neighborhoods, and family-friendly atmosphere. The mix of Victorian homes and newer developments all benefit from quality rug care.',
    nearby: ['glen-ellyn', 'winfield', 'carol-stream', 'naperville', 'warrenville', 'west-chicago'],
    meta: {
      title: 'Rug Cleaning in Wheaton, IL | Fox Valley Rug Works',
      description: 'Professional rug cleaning for Wheaton, IL. All rug types. Dedicated plant. Free pickup & delivery.',
    },
  },
  {
    slug: 'carol-stream',
    name: 'Carol Stream',
    county: 'DuPage County',
    description: 'A well-planned suburb with a variety of housing options from townhomes to single-family homes. Carol Stream\u2019s central DuPage location puts our plant within easy reach for drop-off or pickup.',
    nearby: ['wheaton', 'bloomingdale', 'hanover-park', 'streamwood', 'west-chicago', 'roselle', 'glen-ellyn'],
    meta: {
      title: 'Rug Cleaning in Carol Stream, IL | Fox Valley Rug Works',
      description: 'Rug cleaning for Carol Stream, IL. Expert plant cleaning for all rug types. Free estimates.',
    },
  },
  {
    slug: 'bloomingdale',
    name: 'Bloomingdale',
    county: 'DuPage County',
    description: 'A comfortable suburban village anchored by Stratford Square and surrounded by established residential neighborhoods. Bloomingdale\u2019s location along the Army Trail corridor makes reaching our plant a breeze.',
    nearby: ['roselle', 'carol-stream', 'hanover-park', 'schaumburg', 'glen-ellyn'],
    meta: {
      title: 'Rug Cleaning in Bloomingdale, IL | Fox Valley Rug Works',
      description: 'Area rug cleaning in Bloomingdale, IL. Professional plant cleaning for all types. Free pickup.',
    },
  },
  {
    slug: 'roselle',
    name: 'Roselle',
    county: 'DuPage County',
    description: 'A small, friendly village with a well-kept downtown and residential streets shaded by mature trees. Roselle\u2019s tight-knit community and convenient location make it easy to get rugs to our plant.',
    nearby: ['bloomingdale', 'carol-stream', 'hanover-park', 'schaumburg', 'elk-grove-village'],
    meta: {
      title: 'Rug Cleaning in Roselle, IL | Fox Valley Rug Works',
      description: 'Professional rug cleaning for Roselle, IL. All rug types. Dedicated facility. Free estimates.',
    },
  },
  {
    slug: 'west-chicago',
    name: 'West Chicago',
    county: 'DuPage County',
    description: 'A diverse community along the DuPage River with a historic downtown and mix of older homes and newer construction. West Chicago bridges the gap between the Fox Valley and the DuPage suburbs.',
    nearby: ['carol-stream', 'wheaton', 'winfield', 'st-charles', 'geneva', 'batavia'],
    meta: {
      title: 'Rug Cleaning in West Chicago, IL | Fox Valley Rug Works',
      description: 'Rug cleaning in West Chicago, IL. Expert plant cleaning for all rug types. Free pickup & delivery.',
    },
  },
  {
    slug: 'winfield',
    name: 'Winfield',
    county: 'DuPage County',
    description: 'A small, scenic village along the West Branch of the DuPage River, Winfield features wooded lots, nature preserves, and homes that prioritize quality and comfort.',
    nearby: ['wheaton', 'west-chicago', 'warrenville', 'glen-ellyn', 'naperville'],
    meta: {
      title: 'Rug Cleaning in Winfield, IL | Fox Valley Rug Works',
      description: 'Area rug cleaning for Winfield, IL. Dedicated plant facility. All rug types. Free estimates.',
    },
  },
  {
    slug: 'warrenville',
    name: 'Warrenville',
    county: 'DuPage County',
    description: 'A compact city along the DuPage River known for Cantera and Fermilab\u2019s proximity. Warrenville\u2019s mix of newer developments and established homes creates demand for quality rug care.',
    nearby: ['naperville', 'winfield', 'wheaton', 'batavia', 'west-chicago'],
    meta: {
      title: 'Rug Cleaning in Warrenville, IL | Fox Valley Rug Works',
      description: 'Professional rug cleaning for Warrenville, IL. All rug types welcome. Free pickup & delivery.',
    },
  },
  {
    slug: 'glen-ellyn',
    name: 'Glen Ellyn',
    county: 'DuPage County',
    description: 'A charming village with a beloved downtown, Lake Ellyn, and tree-canopied streets of well-maintained homes. Glen Ellyn residents have a keen eye for quality and expect the same from their service providers.',
    nearby: ['wheaton', 'carol-stream', 'bloomingdale', 'naperville', 'winfield'],
    meta: {
      title: 'Rug Cleaning in Glen Ellyn, IL | Fox Valley Rug Works',
      description: 'Expert rug cleaning for Glen Ellyn, IL. All rug types. Dedicated plant facility. Free estimates.',
    },
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map((c) => c.slug);
}
