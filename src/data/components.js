// 23 Schaeffler 2W Components with full technical content
// Categories: Engine, Transmission, Chassis, Engine Control Units

const components = [
  // ── ENGINE CONTROL UNITS ────────────────────────────────────────────
  {
    id: "m4c",
    label: "M4C Engine Control Unit",
    targetMeshes: ["M4C"],
    category: "Engine Control Units",
    model: "Parts/M4C.glb",
    anchor: [0.0, 3.5, 0.5],
    tagline: "The M4C Standalone Ride-by-Wire Engine Control Unit is designed for 1- and 2-cylinder, 2- and 4-stroke engines operating up to 16,000 rpm, and is ideal for mid- to high-end motorcycles, scooters, and ATVs.",
    applications: ["PHEV", "MHEV", "Gasoline"],
    highlights: [
      "Small and compact design for both 2 and 4 strokes engines either MTB or ETB",
      "Knock sensor compatible (x2)",
      "Use automotive technology"
    ],
    features: [
      "32 bit microcontroller, 80 MHz",
      "1.5 MB Flash Memory",
      "IP67 and IP6K9K (high pressure cleaning)",
      "Separate safety monitoring unit for ETC system",
      "4 binary O2-sensors (opt. 1 linear + 1 binary O2-sensors)",
      "CAN (opt. LIN interface)",
      "Single pocket 64 pins connector"
    ],
    advantages: [
      "Controls up to two electric throttle bodies or a mechanical throttle body and a stepper",
      "Operates up to two injectors per cylinder",
      "Euro 5 with OBD-II compliance",
      "ISO-26262 ready / Asil B"
    ],
    specs: {
      "Engine Type": "1- and 2-cylinder, 2- and 4-stroke",
      "Max RPM": "Up to 16,000 rpm",
      "Microcontroller": "32 bit, 80 MHz",
      "Flash Memory": "1.5 MB",
      "Protection": "IP67 / IP6K9K",
      "Standard": "EURO5 OBDII, ISO-26262 ASIL-B"
    }
  },
  {
    id: "m4a",
    label: "M4A/B Single/Twin Spark Mechatronic",
    targetMeshes: ["M4A"],
    category: "Engine Control Units",
    model: "Parts/M4A.glb",
    anchor: [-1.0, 3.5, 0.0],
    tagline: "For single cylinder, 4 stroke engines from 50 cc up to 350 cc in light motorcycles and scooters.",
    applications: ["Gasoline"],
    highlights: [
      "Single cylinder, Single/twin sparks solution",
      "Very compact size and easy mounting",
      "Throttle body size from ø16 up to 34 mm"
    ],
    features: [
      "Single pocket 24/34 pins connector (equivalent to a 38/43 pins standalone ECU)",
      "IPX6 and IPX9K (high pressure cleaning)",
      "Operating temperature range: -30 °C up to +85 °C",
      "32 bit microcontroller, 32 MHz, 768 Kb Flash",
      "CAN interface",
      "EURO5 OBDII stage 2 compliant"
    ],
    advantages: [
      "ECU with integrated throttle body, sensors and actuator",
      "Uses Schaeffler automotive electronics and technologies",
      "Ethanol compatible",
      "Several configurations: Engine mounting interface, throttle size, cable interface",
      "Integrated 3-axis accelerometer (Tilt sensor)"
    ],
    specs: {
      "Application": "Single cylinder, 4-stroke, 50 cc to 350 cc",
      "Connector": "24/34 pins single pocket",
      "Microcontroller": "32 bit, 32 MHz, 768 Kb Flash",
      "Throttle Size": "ø16 to ø34 mm",
      "Protection": "IPX6, IPX9K",
      "Standard": "EURO5 OBDII stage 2"
    }
  },
  {
    id: "m4rek",
    label: "M4REK Mechatronic",
    targetMeshes: ["M4REK"],
    category: "Engine Control Units",
    model: "Parts/M4REK.glb",
    anchor: [-0.023, -0.249, 0.103],
    tagline: "To manage airflow with embedded ECU. For single-cylinder, 4-stroke engines from 250 cc up to 500 cc for middle-range motorcycles, scooters and ATV, including support for Ride-by-Wire technology.",
    applications: ["PHEV", "MHEV", "Gasoline"],
    highlights: [
      "Engine Control Unit with integrated Electronic Throttle Control and sensors",
      "Very compact size",
      "Easy mounting"
    ],
    features: [
      "Single pocket 36 pins connector (equivalent to a 47 pins standalone ECU)",
      "IPX6 and IPX9K (high pressure cleaning)",
      "Operating temperature range: -30°C up to +85°C",
      "32 bit microcontroller, 80 MHz, 1.5 Mb Flash Memory",
      "CAN interface",
      "EURO5 OBDII stage 2 compliant",
      "Separate safety monitoring unit for ETC system (ISO-26262 compliant)"
    ],
    advantages: [
      "Uses Schaeffler automotive electronics",
      "Several configurations: Engine mounting interface, throttle diameter",
      "Throttle body size from ø 28 mm up to 42 mm"
    ],
    specs: {
      "Application": "Single-cylinder, 4-stroke, 250 cc to 500 cc",
      "Connector": "36 pins single pocket",
      "Microcontroller": "32 bit, 80 MHz, 1.5 Mb Flash",
      "Throttle Size": "ø28 to ø42 mm",
      "Protection": "IPX6, IPX9K",
      "Standard": "EURO5 OBDII, ISO-26262"
    }
  },

  // ── ENGINE PRODUCTS ──────────────────────────────────────────────────
  {
    id: "fuel_injector",
    label: "Gasoline Deka 7 Port Fuel Injector",
    targetMeshes: ["Fuel Injector"],
    category: "Engine",
    model: "Parts/Fuel Injector.glb",
    anchor: [-0.056, -0.265, 0.845],
    tagline: "Port Fuel Injection (PFI) injector with unique flexibility body, tip and spray configurations.",
    applications: ["PHEV", "MHEV", "Gasoline"],
    highlights: ["Proven durability performance", "Improved opening and closing performance", "E-fuel compatible design"],
    features: [
      "System pressure: 2.5 to 6 bar",
      "Static flow rate: Per application 0.75 g/s to 6.0 g/s",
      "SMD size: 60 µm & higher (Qs < 3 g/s @ 400 kPa and Cone Spray)",
      "Opening/Closing time: <1.1 ms ; <0.8 ms",
      "Linearity Range/Pulse: 10:1 ; 1.2 – 1.3 ms (MOV = 5.5 V)",
      "Typical spray pattern: Cone 10 °C – 30 °C, bent 5 °C- 25 °C and split spray 15 °C – 30 °C (Combo)",
      "Mounting: Intake manifold or cylinder head"
    ],
    advantages: [
      "Fast opening / closing",
      "Various packaging options",
      "Flexible orifice configurations with various cone combination",
      "Low pulse width with high linear performance",
      "Low voltage sensitivity"
    ],
    specs: {
      "System Pressure": "2.5 – 6 bar",
      "Static Flow Rate": "0.75 – 6.0 g/s",
      "SMD Size": "60 µm & higher",
      "Opening Time": "< 1.1 ms",
      "Closing Time": "< 0.8 ms",
      "Linearity": "10:1"
    }
  },
  {
    id: "fuel_injector_deka10",
    label: "Gasoline Deka 10 Port Fuel Injector",
    targetMeshes: ["Fuel Injector"],
    category: "Engine",
    model: "Parts/Fuel Injector.glb",
    anchor: [-0.056, -0.265, 0.845],
    tagline: "The Gasoline Deka 10 Port Fuel Injector features high flow range and reduced packaging, also for twin and dual port engines and non-automotive applications.",
    applications: ["PHEV", "MHEV", "Gasoline"],
    highlights: ["Compact design with high durability performance", "Reduce leakage and improve flow range", "E-fuel compatible – Full stainless-steel design"],
    features: [
      "System pressure: 2.5 to 8 bar",
      "Static flow rate: Per application 0.50 g/s to 8.0 g/s",
      "SMD size: 60 µm & higher (Qs < 3 g/s @ 400 kPa and Cone Spray)",
      "Opening/Closing time: <1.1 ms , <0.5 ms",
      "Linearity Range/Pulse: 15:1 ; 1.1 – 1.2 ms (MOV = 5.5V)",
      "Typical spray pattern: Cone 10 °C – 30 °C , bent 5 °C – 25 °C and split spray 15 °C – 30 °C (Combo)",
      "Mounting: Intake manifold or cylinder head"
    ],
    advantages: [
      "Improved magnetics leading to faster closing time",
      "Improved tip leakage performance",
      "Designed for contamination robustness",
      "Low pulse width with high linear performance",
      "Smallest packaging offered"
    ],
    specs: {
      "System Pressure": "2.5 – 8 bar",
      "Static Flow Rate": "0.50 – 8.0 g/s",
      "SMD Size": "60 µm & higher",
      "Opening Time": "< 1.1 ms",
      "Closing Time": "< 0.5 ms",
      "Linearity": "15:1"
    }
  },
  {
    id: "pressure_sensor",
    label: "Pressure Sensor - Manifold Absolute with temperature sensor",
    targetMeshes: ["Pressure sensor"],
    category: "Engine",
    model: "Parts/pressure sensor.glb",
    anchor: [0.358, -0.073, 0.906],
    tagline: "Small and robust pressure sensor with integrated temperature sensing for manifolds.",
    applications: ["PHEV", "MHEV", "Gasoline/Diesel"],
    highlights: [
      "Flexible transfer function calibration with programmable clip levels and OBD functionality",
      "High accuracy and temperature stability",
      "Different housing/cover materials and protection gels to cope with toughest environments"
    ],
    features: [
      "Pressure range: 7 kPa up to 500 kPa",
      "Accuracy: 1 % full scale (10 °C up to 85 °C)",
      "Temp. range: -40 °C up to 140 °C",
      "Output signal: Analog or SENT"
    ],
    advantages: [
      "Flexible calibration of transfer functions",
      "High accuracy",
      "Low-cost design and high quality",
      "Fulfills toughest EMC requirements",
      "Flexible housing, connector and mounting design"
    ],
    specs: {
      "Pressure Range": "7 kPa – 500 kPa",
      "Accuracy": "1 % full scale",
      "Temp Range": "-40°C to +140°C",
      "Output": "Analog or SENT"
    }
  },
  {
    id: "knock_sensor",
    label: "Knock Sensor – M8 Standard Design",
    targetMeshes: ["Knock sensor"],
    category: "Engine",
    model: "Parts/Knock sensor.glb",
    anchor: [0.644, -0.889, 1.048],
    tagline: "Measures structural vibrations in the combustion engine to continuously adjust ignition parameters.",
    applications: ["PHEV", "MHEV", "EV", "Gasoline/Diesel"],
    highlights: [
      "Worldwide market leader with series manufacturing since 1990",
      ">15 cable and integrated connector versions in production",
      "Enabler for emission reduction as part of a modern ICE"
    ],
    features: [
      "Acceleration sensor based on piezo ceramic technology",
      "Frequency range: 3 kHz up to 25 kHz",
      "Possible integration of discharge resistor",
      "Integrated connector or cable version",
      "Various connector designs",
      "Nut and glue types assembly technology"
    ],
    advantages: [
      "Production locations in Americas, Europe, India and China",
      "Optimized ignition timing for maximum efficiency",
      "High sensitivity",
      "Compact design, nested bolt possible",
      "Increases engine power",
      "Decreases fuel consumption",
      "Nut and glued types with in-house engine qualification capability"
    ],
    specs: {
      "Sensor Type": "Piezo ceramic",
      "Frequency Range": "3 kHz – 25 kHz",
      "Assembly": "Nut or glue",
      "Series Since": "1990",
      "Versions": ">15 cable & connector"
    }
  },
  {
    id: "flex_fuel_sensor",
    label: "Flex Fuel Sensor",
    targetMeshes: ["Flex Fuel Sensor"],
    category: "Engine",
    model: "Parts/Flex Fuel sensore.glb",
    anchor: [0.631, -0.182, -1.724],
    tagline: "Detects ethanol concentration in gasoline / ethanol fuel mixture before engine injection.",
    applications: ["PHEV", "MHEV", "EV", "Gasoline/Diesel"],
    highlights: [
      "Enabler for emission reduction as part of a modern ICE",
      "High accuracy with active temperature and conductivity compensation",
      "Frequent signal output of % ethanol and temperature"
    ],
    features: [
      "Measurement principle: Capacitive (0-100 % ethanol content)",
      "Accuracy: ±5 % ethanol concentration",
      "Pressure range: <10 bar (145 psi)",
      "Fuel temp. range: -40 °C up to 80 °C",
      "Environmental temp: -40 °C up to 140 °C"
    ],
    advantages: [
      "Worldwide market leader with series manufacturing since 1998",
      "Highly accurate prediction of ethanol concentration",
      "Enables ethanol detection before inject./combustion with OBD1 functionality",
      "Outputs ethanol concentration and fuel temperature within 250 ms after start-up",
      "Self-diagnostic capability",
      "Calibrations available for worldwide market"
    ],
    specs: {
      "Principle": "Capacitive",
      "Ethanol Range": "0–100%",
      "Accuracy": "±5%",
      "Pressure": "< 10 bar",
      "Response Time": "< 250 ms after start",
      "Fuel Temp": "-40°C to +80°C"
    }
  },
  {
    id: "hydraulic_chain_tensioner",
    label: "Hydraulic Chain Tensioner",
    targetMeshes: ["Hydraulic Chain tensioner"],
    category: "Engine",
    model: "Parts/Hydrolic Chain tenssioner.glb",
    anchor: [0.452, -0.794, 0.782],
    tagline: "The hydraulic “eco” chain tensioner is a cost-effective solution for timing drives, reducing friction and fuel consumption while improving NVH behavior at the same time.",
    applications: ["Gasoline/Diesel"],
    highlights: [
      "Outstanding NVH behavior",
      "Reduced fuel consumption",
      "Robust and cost-effective design"
    ],
    features: [
      "Steel piston in a formed steel housing",
      "Low chain pre-tensioning is possible",
      "Stable and precise damping behavior",
      "Reduced friction in the timing drive"
    ],
    advantages: [
      "Chain blade design can be simplified",
      "Superior load peak compensation to that of mechanical tensioners"
    ],
    specs: {
      "Type": "Hydraulic eco tensioner",
      "Housing": "Formed steel",
      "Piston": "Steel",
      "Application": "Timing drive"
    }
  },
  {
    id: "cam_roller",
    label: "Cam roller and BZ Pin",
    targetMeshes: ["Rocket arm, Cam Roller, BZ Pin"],
    category: "Engine",
    model: "Parts/Rocket arm, Cam Roller, BZ Pin .glb",
    anchor: [0.024, -0.054, 1.421],
    tagline: "Schaeffler has developed a wide range of outer rings, needles and Pin for various motorcycle applications.",
    applications: ["Gasoline/Diesel"],
    highlights: [
      "Easy to assembly with rocker arm",
      "Optimized friction",
      "Suitable for engine speed up to 12000 RPM"
    ],
    features: [
      "Application specific design features on the product/drawing",
      "Needles sorts are defined as per bearing clearance requirements",
      "Automated production or assembly lines for cam roller; no manual interventions"
    ],
    advantages: [
      "Simplified, more cost-effective manufacturing process for the outer ring, needles and pins.",
      "High level of friction benefits against plain bearing",
      "Locally developed outer rings and pins; Cost-effective solution"
    ],
    specs: {
      "Max Engine Speed": "12,000 RPM",
      "Production": "Automated lines",
      "In Market Since": ">10 years (India 2W)"
    }
  },
  {
    id: "one_way_clutch",
    label: "Starter One Way Clutch",
    targetMeshes: ["One way clutch"],
    category: "Engine",
    model: "Parts/One way Clutch.glb",
    anchor: [0.771, -2.246, 0.950],
    tagline: "This roller clutch for electric starter drives in motorcycles is manufactured using forming methods. It features a sophisticated design with reduced space requirements, increased performance and provides protection against failure.",
    applications: ["Gasoline/Diesel"],
    highlights: [
      "Easy to mount",
      "Low space requirements and reduced weight",
      "Suitable for high power densities"
    ],
    features: [
      "Deep-drawn outer ring, manufactured using forming methods",
      "Integrated torque limitation function",
      "Schaeffler’s manufacturing technology ensures reliable quality"
    ],
    advantages: [
      "Simplified, more cost-effective manufacturing process for the magnet housing; hardening and grinding are no longer required",
      "High level of protection against failure and protection of the adjacent parts without additional components",
      "Cost-effective"
    ],
    specs: {
      "Type": "Roller clutch",
      "Outer Ring": "Deep-drawn",
      "Feature": "Integrated torque limitation",
      "Application": "Electric starter drive"
    }
  },
  {
    id: "crankpin_kzk",
    label: "Crankpin KZK (Connecting rod big end bearing) & Pistonpin KBK (Connecting rod small end bearing)",
    targetMeshes: ["Crankpin KZK", "Pistonpin KBK"],
    category: "Engine",
    model: "Parts/Crankpin KZK.glb",
    anchor: [0.585, -2.242, 0.965],
    tagline: "Crankpin needle bearings are the “heart” of each small combustion engine. Thanks to Schaeffler’ s proven know-how and quality standard, a long lifetime is guaranteed.",
    applications: ["Gasoline/Diesel"],
    highlights: [
      "High resistance against centrifugal forces",
      "Improved lubrication access",
      "Easy assembly"
    ],
    features: [
      "Different cage profiles according to application requirements available",
      "Various dimensions available",
      "Dedicated designs and dimensions on request",
      "Different coatings accordingly to application requirement and surrounding conditions"
    ],
    advantages: [
      "Supports high centrifugal and acceleration forces and are suitable for high speeds.",
      "High wear resistance with improved cage surface quality",
      "Both inner and outer needle retention",
      "Long bearing lifetime",
      "Supports high frequency oscillating loads",
      "Good wear resistance during dry lubrication environment when cages are coated",
      "Improved cage surface quality"
    ],
    specs: {
      "Type": "KZK (big end) / KBK (small end)",
      "Cage Material": "Various, coated options",
      "Load Type": "High centrifugal & oscillating",
      "Assembly": "Easy"
    }
  },
  {
    id: "drawn_cup_starter",
    label: "Drawn Cup Needle Roller Bearing (Starter Motor/Primary Drive Support) HK-RS Type",
    targetMeshes: ["Drawn Cup Needle Roller Bearing "],
    category: "Engine",
    model: "Parts/Drawn Cup Needle Roller Bearing HK - RS.glb",
    anchor: [-0.068, -2.086, -0.710],
    tagline: "The drawn cup needle roller bearing benefits from our extensive experience in deep drawing technology to provide significant advantages with respect to cost and precision.",
    applications: ["Gasoline/Diesel"],
    highlights: [
      "High load rating capacity Weight saving potential by substitution of larger bearings",
      "Cost-efficient bearing by use of deep drawing technology"
    ],
    features: [
      "Deep drawing technology for roller bearing outer ring",
      "Applicable for multiple applications",
      "Low noise and friction level",
      "Ease of assembly",
      "Cost effective solution"
    ],
    advantages: [
      "High load rating capacity with significantly more compact design space than for a ball bearing",
      "High robustness against overload due to line contact",
      "Low radial installation space",
      "Bearings with needle roller and cage assemblies allow higher speeds (Bearings with cage)",
      "Offer extremely high load carrying capacity (Full complement bearing, without cage)",
      "Anti rust performance with grease version"
    ],
    specs: {
      "Technology": "Deep drawing",
      "Application": "Starter motor / Primary drive",
      "Type": "HK-RS",
      "Lubrication": "Grease / Oil"
    }
  },
  {
    id: "cylindrical_roller",
    label: "Cylindrical roller bearing with riveted steel cage",
    targetMeshes: ["Cylindrical Roller with sheet metal cage"],
    category: "Engine",
    model: "Parts/Cylindrical Roller with sheet metal cage  .glb",
    anchor: [-0.137, -0.342, -1.506],
    tagline: "Non-separable self-retaining bearing with higher load rating and reduced friction.",
    applications: ["PHEV", "MHEV", "EV", "Gasoline/Diesel"],
    highlights: [
      "Non Separable one unit easy to mount.",
      "Higher Stiffness Controlled rolling elements both rings lips on either side"
    ],
    features: [
      "Non-separable self-retaining bearing.",
      "Reduction in frictional torque compared to standard CRB.",
      "Higher load rating compared to a Ball bearing in the same envelope size.",
      "Suitable for Higher radial & axial loads.",
      "Optimized/Lower number of rollers.",
      "Both sides lip for the Inner ring and outer rings.",
      "Riveted steel cage design."
    ],
    advantages: [
      "Higher power density in a small or the same envelope size",
      "High reliability compared to Ball bearings.",
      "Lower friction compared to standard CRB.",
      "Ease of assembly."
    ],
    specs: {
      "Type": "Cylindrical roller with riveted steel cage",
      "Cage": "Riveted steel / Sheet metal",
      "Load": "High radial & axial",
      "Assembly": "Non-separable unit"
    }
  },

  // ── TRANSMISSION ─────────────────────────────────────────────────────
  {
    id: "plastic_cage_needle",
    label: "Plastic cage and needle roller assembly for Transmission Constant Mesh gear support",
    targetMeshes: ["Plastic cage and needle roller bearing (K Type"],
    category: "Transmission",
    model: "Parts/Plastic cage and needle roller bearing .glb",
    anchor: [1.5, -3.0, 3.0],
    tagline: "Needle cages – open (Split type) or closed – are a cost efficient and compact solution as constant mesh bearing in gearboxes.",
    applications: ["Gasoline/Diesel"],
    highlights: [
      "Easy assembly with open cage design",
      "Compact dimensions",
      "Robust solution"
    ],
    features: [
      "Inner and outer needle retention",
      "Various cage designs and materials available",
      "Special needle guidance for precise cage movement",
      "Improved shifting comfort",
      "Good dry –running characteristics"
    ],
    advantages: [
      "Low installation space required",
      "High load capacity",
      "High resistance to false brinelling",
      "Less friction, noise and heat",
      "Precise control on radial clearance"
    ],
    specs: {
      "Type": "Plastic cage and needle roller assembly",
      "Cage": "Open (Split type) or closed",
      "Application": "Transmission Constant Mesh gear support",
      "Fuel Type": "Gasoline/ Diesel"
    }
  },
  {
    id: "machined_needle_rna",
    label: "Machined needle roller assembly for Transmission support application",
    targetMeshes: ["Machined Needle roller bearing RNA/NK"],
    category: "Transmission",
    model: "Parts/Machined Needle roller bearing RNK NK.glb",
    anchor: [-1.5, -3.0, 3.0],
    tagline: "The machined outer ring benefits for high static load capacity to provide significant advantages with respect to cost and precision within low installation space.",
    applications: ["Gasoline/Diesel"],
    highlights: [
      "Easy assembly with open cage design",
      "Compact dimensions",
      "Robust solution"
    ],
    features: [
      "Enhanced life & durability for Transmission Application",
      "Ease of assembly",
      "Cost optimized solution"
    ],
    advantages: [
      "Low installation space required",
      "High load capacity (Very High Static Load Capacity)",
      "Less friction, noise and heat",
      "Precise control on radial clearance",
      "Increased rating life",
      "Best suited for applications having high static loads"
    ],
    specs: {
      "Type": "Machined needle roller assembly",
      "Raceway Profile": "Special XL life raceway profile",
      "Application": "Transmission support application",
      "Fuel Type": "Gasoline/ Diesel"
    }
  },
  {
    id: "deep_groove_ball",
    label: "Ball bearing for Engine & Gearbox",
    targetMeshes: ["Deep Groove Ball Bearings"],
    category: "Transmission",
    model: "Parts/Deep Groove Ball Bearings.glb",
    anchor: [-0.295, -1.529, -0.605],
    tagline: "Schaeffler’s ball bearings with special heat treatment and coating for higher lifetime and mileage.",
    applications: ["Gasoline/Diesel"],
    highlights: [
      "Higher lifetime special heat treatment.",
      "Higher Mileage Reduced friction"
    ],
    features: [
      "Versatile, self-retaining",
      "Simple design, robust in operation and easy to maintain.",
      "Support radial & axial forces in both directions",
      "Low noise and low friction",
      "Special coating & heat treatment."
    ],
    advantages: [
      "Reduced friction",
      "Higher load rating",
      "Reduced fuel consumption",
      "Higher bearing lifetime",
      "Higher resistance against contamination."
    ],
    specs: {
      "Type": "Ball bearing for Engine & Gearbox",
      "Treatment": "Special heat treatment",
      "Mileage": "Higher Mileage",
      "Forces": "Support radial & axial forces"
    }
  },

  // ── CHASSIS ──────────────────────────────────────────────────────────
  {
    id: "drawn_cup_swing",
    label: "Drawn Cup Needle Roller Bearing (Swing arm application) HK/HNH Type",
    targetMeshes: ["Drawn Cup Needle Roller Bearing ("],
    category: "Chassis",
    model: "Parts/Drawn Cup Needle Roller Bearing HK - HNH.glb",
    anchor: [-0.068, -2.086, -0.710],
    tagline: "The drawn cup needle roller bearing benefits from our extensive experience in deep drawing technology to provide significant advantages with respect to cost and precision.",
    applications: ["Gasoline/Diesel"],
    highlights: [
      "High load rating capacity Weight saving potential by substitution of larger bearings",
      "Cost-efficient bearing by use of deep drawing technology"
    ],
    features: [
      "Deep drawing technology for roller bearing outer ring",
      "Applicable for multiple applications",
      "Low noise and friction level",
      "Ease of assembly",
      "Cost effective solution"
    ],
    advantages: [
      "High load rating capacity with significantly more compact design space than for a ball bearing",
      "High robustness against overload due to line contact",
      "Low radial installation space",
      "Bearings with needle roller and cage assemblies allow higher speeds. (Bearings with cage)",
      "offer extremely high load carrying capacity (Full complement bearing, without cage).",
      "Anti rust performance with grease version"
    ],
    specs: {
      "Type": "Drawn Cup Needle Roller Bearing",
      "Technology": "Deep drawing technology",
      "Application": "Swing arm application",
      "Series": "HK/HNH Type"
    }
  },
  {
    id: "ball_bearing_abs",
    label: "Wheel bearing with encoder sealing",
    targetMeshes: ["Ball Bearing with ABS tonner"],
    category: "Chassis",
    model: "Parts/Ball Bearing with ABS tonner.glb",
    anchor: [0.240, -2.785, 6.323],
    tagline: "Go Digital embedded with encoder for ABS. Higher Accuracy Controlled Braking more accurate speed measurement.",
    applications: ["Gasoline/Diesel"],
    highlights: [
      "Go Digital embedded with encoder for ABS.",
      "Higher Accuracy Controlled Braking more accurate speed measurement."
    ],
    features: [
      "Encoder integrated into sealing.",
      "Excellent functional feasibility and predictability.",
      "Compatible with different sensing technologies (Hall, magneto-resistive).",
      "Robust and proven technology from Automotive."
    ],
    advantages: [
      "Encoder integrated into sealing.",
      "Excellent functional feasibility and predictability.",
      "Compatible with different sensing technologies (Hall, magneto-resistive).",
      "Fewer parts & installation space on the system level.",
      "No additional encoder assembly required.",
      "Reliable over lifetime & better protection against dirt/dust.",
      "Robust and proven technology from Automotive."
    ],
    specs: {
      "Type": "Wheel bearing with encoder sealing",
      "Sensing": "Hall, magneto-resistive",
      "Integration": "Encoder integrated into sealing",
      "System Level": "Fewer parts & installation space"
    }
  },
  {
    id: "angular_contact_ball",
    label: "Steering Head Angular Contact Ball Bearing",
    targetMeshes: ["Angular Contact Ball bearing"],
    category: "Chassis",
    model: "Parts/Angular Contact  Ball Bearing.glb",
    anchor: [0.0, 2.5, -6.0],
    tagline: "Schaeffler’s angular contact ball bearing with a special grease for highest resilience of the steering head bearings.",
    applications: ["Gasoline/Diesel"],
    highlights: [
      "Outstanding steering feeling due to high precision balls and raceways",
      "Highest resilience absorbs more shocks"
    ],
    features: [
      "Optimized internal construction.",
      "Improved raceway surfaces.",
      "Improved ball quality.",
      "Controlled running tolerances.",
      "45°contact angle.",
      "Higher thrust capacity.",
      "Higher load rating and service life",
      "Increased reliability.",
      "Downsizing/Weight reduction.",
      "Higher power density.",
      "Data Matric Code (DMC)"
    ],
    advantages: [
      "Higher rating and operating life.",
      "Increased reliability.",
      "Low noise.",
      "Lower friction.",
      "Reduced steering efforts.",
      "Reduced heat generation.",
      "Extended maintenance intervals.",
      "Reduced overall operating costs.",
      "Better aesthetic."
    ],
    specs: {
      "Type": "Steering Head Angular Contact Ball Bearing",
      "Contact Angle": "45° contact angle",
      "Tracking": "Data Matric Code (DMC)",
      "Feel": "Outstanding steering feeling"
    }
  },
  {
    id: "steering_head_trb",
    label: "Steering Head Taper roller Bearing",
    targetMeshes: ["Steering Head TRB"],
    category: "Chassis",
    model: "Parts/Steering Head TRB.glb",
    anchor: [-0.662, 1.016, 4.235],
    tagline: "Higher jumps on Off-road Drive, Higher load rating. Highest resilience absorbs more shocks.",
    applications: ["Gasoline/Diesel"],
    highlights: [
      "Higher jumps on Off-road Drive, Higher load rating",
      "Highest resilience absorbs more shocks"
    ],
    features: [
      "Optimized internal construction.",
      "Improved raceway surfaces.",
      "Controlled running tolerances.",
      "Higher thrust capacity.",
      "Higher load rating and service life",
      "Increased reliability.",
      "Higher power density.",
      "Data Matric Code (DMC)"
    ],
    advantages: [
      "Higher rating and operating life.",
      "Increased reliability.",
      "Low noise.",
      "Lower friction.",
      "Reduced steering efforts.",
      "Reduced heat generation.",
      "Extended maintenance intervals.",
      "Reduced overall operating costs.",
      "Better aesthetic."
    ],
    specs: {
      "Type": "Steering Head Taper roller Bearing",
      "Application": "Off-road Drive / High shocks",
      "Tracking": "Data Matric Code (DMC)",
      "Resilience": "Dampen high shocks"
    }
  },

  // ── ELECTRIFICATION (EV) ─────────────────────────────────────────────
  {
    id: "e_motor",
    label: "E-Motor 48 V",
    category: "Electrification",
    model: "e_motor.glb",
    anchor: [1.5, -1.5, 4.0],
    tagline: "High-performance, cost optimized, efficient eMotor designed to meet the evolving needs of modern electric mobility.",
    applications: ["PHEV", "MHEV", "BEV"],
    highlights: [
      "Scalable platform in power and torque to match diverse vehicle needs",
      "Tailored design for electric and hybrid 2/3 wheeler applications",
      "Robust technology featuring distributed winding for enhanced durability"
    ],
    features: [
      "Scalable output power: Up to 10 kW",
      "Scalable output torque at motor shaft: Up to 45 Nm",
      "Max speed: 7,500 – 10,000 rpm",
      "Protection class: IP67",
      "Weight: Starting from 7.5 kg"
    ],
    advantages: [
      "High power density permanent magnet motor for compact yet powerful performance",
      "Designed to optimize magnet cost versus performance",
      "Low cogging torque",
      "Reduced phase current demand for improved energy efficiency",
      "Modular and scalable platform with optional reducer integration for flexible vehicle design"
    ],
    specs: {
      "Type": "E-Motor 48 V",
      "Max Power": "Up to 10 kW",
      "Max Torque": "Up to 45 Nm",
      "Max Speed": "7,500 – 10,000 rpm",
      "Protection": "IP67",
      "Weight": "Starting from 7.5 kg"
    }
  },
  {
    id: "edcu",
    label: "Control Unit – Electric Drive eDCU",
    category: "Electrification",
    model: "edcu.glb",
    anchor: [1.5, -0.5, 4.5],
    tagline: "A smart, all-in-one controller that merges motor and vehicle control functions into a single, scalable unit.",
    applications: ["PHEV", "MHEV", "BEV"],
    highlights: [
      "Scalable platform adaptable to a wide range of eMotor requirements",
      "Tailored made for electric and hybrid 2/3 wheeler applications",
      "Built on Schaeffler proven technology from automotive expertise"
    ],
    features: [
      "Input voltage: From 39 V to 58 V",
      "Scalable Inverter performance: Up to 210 Arms phase current",
      "Protection class: IP67",
      "Functional safety: Up to ASIL-B / MSIL-C",
      "Interface: CAN"
    ],
    advantages: [
      "Seamless powertrain integration: From driver input to motor control, including vehicle-level functions",
      "Versatile motor control: Supports large variety of machine types",
      "Smart battery energy management fitting removable multi-batteries systems",
      "Compact & efficient: Saves space without compromising performance",
      "Cost effective design"
    ],
    specs: {
      "Type": "Control Unit – Electric Drive eDCU",
      "Voltage": "From 39 V to 58 V",
      "Performance": "Up to 210 Arms phase current",
      "Safety": "Up to ASIL-B / MSIL-C",
      "Interface": "CAN"
    }
  },
  {
    id: "irps",
    label: "Inductive Rotor Position Sensor (iRPS) - Through Shaft",
    category: "Electrification",
    model: "irps.glb",
    anchor: [0.5, -1.5, 4.0],
    tagline: "The iRPS is a compact inductive sensor dedicated to high-speed sensing. It provides accurate positioning to drive e-motors with the best efficiency.",
    applications: ["PHEV", "MHEV", "BEV"],
    highlights: [
      "Magnet-free technology insensitive to low-frequency magnetic fields",
      "Functional safety up-to ASIL- D",
      "Active analog signal thus signal demodulation is not needed then saving at system level"
    ],
    features: [
      "Temperature: -40 °C up to 150 °C (160 °C in peak)",
      "Supply Voltage: 5 V",
      "Supply Current: < 20 mA",
      "Output signal: Analog Sine / Cosine",
      "Speed: up to 60 krpm (for 4 pairs of pole)",
      "Accuracy: < ± 0,5° electrical",
      "Safety: ASIL C, ASIL D capable"
    ],
    advantages: [
      "Immune to low frequency magnetic fields",
      "Magnet-free technology without rare earth elements",
      "Light weight for sensor and target",
      "Configurable to any pole pair number",
      "Various mechanical integrations and packaging possible"
    ],
    specs: {
      "Type": "Inductive Rotor Position Sensor (iRPS)",
      "Accuracy": "< ± 0,5° electrical",
      "Speed": "Up to 60 krpm",
      "Safety": "ASIL C, ASIL D capable",
      "Environment": "-40 °C to 150 °C"
    }
  },
  {
    id: "bms",
    label: "Battery Management System",
    category: "Electrification",
    model: "bms.glb",
    anchor: [0.0, 3.0, 4.5],
    tagline: "A smart, all-in-one controller that merges battery management features for small to medium sized electric 2/3 wheelers.",
    applications: ["PHEV", "MHEV", "BEV"],
    highlights: [
      "High functionality integration",
      "Functional safety and Cybersecurity state of the art design",
      "Leveraging Schaeffler passenger car platforms"
    ],
    features: [
      "In-series cell connection: Up to 14s (NMC) | 16s (LFP)",
      "Continuous current: 145 A",
      "Peak current: 210 A (30 s)",
      "Current accuracy: 0.1 A |1 % within [-300 A ; 300 A] by shunt resistor",
      "Circuit breaker: Mosfets",
      "Cell balancing: 150 mA (passive)",
      "Communication: 2 CAN modules",
      "Safety & Security: ISO 26262 (ASIL C) & UNECE R155"
    ],
    advantages: [
      "Single PCB including switching, current sensing, balancing and monitoring functions",
      "Compatible with internal or external BMS supply",
      "Scalable to different powers, cells and chemistries",
      "Multi-batteries compatible",
      "Automotive state of the art design: Focus on safety and cell thermal management",
      "Cost effective solution with automotive quality standards"
    ],
    specs: {
      "Type": "Battery Management System",
      "Configuration": "Up to 14s (NMC) | 16s (LFP)",
      "Current": "145 A (Cont.) / 210 A (Peak)",
      "Safety": "ISO 26262 (ASIL C) & UNECE R155",
      "Interface": "2 CAN modules"
    }
  }
];

export default components;

export const componentMap = Object.fromEntries(components.map(c => [c.id, c]));

export const categories = [...new Set(components.map(c => c.category))];
