const glossaryMap = {
  "Platformed subjectivity": {
    definition: "The hybrid condition of being shaped by algorithmic feedbacks, data infrastructures, and interface routines where the user becomes a techno-organic node modulated by affective, cognitive, and behavioral capture.",
    relatedTerms: ["Technosubjectivity", "Networked identity"]
  },
  "Affective modulation": {
    definition: "The pre-cognitive shaping of emotional and energetic states through interface design including likes, pings, and ranking systems. This modulation is the fuel of platform participation and the extraction of value (Terranova, 2004).",
    relatedTerms: ["Affective computing", "Emotional labor"]
  },
  "Machine perception": {
    definition: "The automated sensing and interpretation of the world through digital facial recognition, predictive vision, and algorithmic filtering and other digital systems, which reconstruct visibility itself (Arcagni, 2020).",
    relatedTerms: ["Computer vision", "Predictive modeling"]
  },
  "Vectoralist class": {
    definition: "A class that profits from the ownership and control of information vectors such as platforms, protocols, and networks — while they do not produce value directly. They monetize flows of attention, affect, and abstraction (Wark, 2004).",
    relatedTerms: ["Platform capitalism", "Cognitive extraction"]
  },
  "Hacker class": {
    definition: "The generative class—artists, coders, designers—who create new cultural forms and abstractions. Their creative labor is often captured and gamified in platform economies (Wark, 2004).",
    relatedTerms: ["Creative commons", "Generative culture"]
  },
  "MASC (Multilingual Artist and Sensory Code)": {
    definition: "A posthuman mode of ethical resistance and literacy. MASC describes fluency across media grammars and sensory registers as a means to navigate and resist platform governance through situated creation.",
    relatedTerms: ["Transmedia fluency", "Situated creation"]
  },
  "Capture": {
    definition: "Capture is design as governance: the infrastructural process by which platforms script, extract, and govern gesture, affect, and perception—before conscious thought arises.",
    relatedTerms: ["Soft control", "Micro-regulation"]
  },
  "Media grammars": {
    definition: "The underlying symbolic and computational logics of platforms that shape how meaning is created and circulated—e.g., swipe interfaces, content filters, or prompt syntaxes.",
    relatedTerms: ["Interface syntax", "Code aesthetics"]
  },
  "Sensorial registers": {
    definition: "The embodied channels through which perception is modulated are visual, haptic, auditory, affective. They are increasingly shaped by devices like wearables, interfaces, and biometric feedback loops.",
    relatedTerms: ["Embodied interaction", "Biofeedback"]
  },
  "Gamified subjectivity": {
    definition: "A selfhood produced by metric-driven feedback—likes, scores, badges—and action is inevitably steered toward platform-optimized engagement and visibility.",
    relatedTerms: ["Quantified self", "Behavioral economics"]
  },
  "Post-cognitive governance": {
    definition: "Governance that targets cognition itself through predictive tools, wearables, and interface nudges. Behavior, thought, and mood are guided before reasoning intervenes (Clark & Chalmers, 1998).",
    relatedTerms: ["Nudge design", "Neurocapitalism"]
  },
  "Hybrid aesthetics": {
    definition: "An artistic mode that operates inside platform logics—where works are not fixed objects but dynamic, recombinable assemblages co-shaped by users, algorithms, and data flows (Quaranta, 2015).",
    relatedTerms: ["Post-internet art", "Live systems"]
  },
  "Extended mind hypothesis": {
    definition: "A theory stating that cognition is not confined to the mind but extends into external tools, environments, and technologies—such as maps, apps, wearables—which function as cognitive prosthetics (Clark & Chalmers, 1998).",
    relatedTerms: ["Cognitive offloading", "Techno-embodiment"]
  },
  "Surveillance capitalism": {
    definition: "A system where platforms extract and commodify emotional, cognitive, and social life without consent (Zuboff, 2019), and human behavior is mined as a raw material for prediction and monetization.",
    relatedTerms: ["Data colonialism", "Predictive governance"]
  },
  "Ethical resistance": {
    definition: "A practice of cultivating posthuman agency within systems of modulation and capture. Drawing from Vallor and Haraway, this practice emphasizes relational care, situated irony, and techno-moral skill as paths of resilience.",
    relatedTerms: ["Techno-moral skill", "Relational autonomy"]
  }
,
  "Technosubjectivity": {
    "definition": "A theoretical construct describing how subjectivity is shaped by interaction with technological systems and digital infrastructures.",
    "relatedTerms": [
      "Techno-embodiment",
      "Techno-moral skill"
    ]
  },
  "Networked identity": {
    "definition": "An identity constructed and maintained through participation in digital networks and social platforms.",
    "relatedTerms": []
  },
  "Affective computing": {
    "definition": "Technologies designed to detect, interpret, and simulate human emotions through computational methods.",
    "relatedTerms": [
      "Affective modulation",
      "Emotional labor"
    ]
  },
  "Emotional labor": {
    "definition": "The effort to manage and produce emotional states in oneself or others, often commodified within platform economies.",
    "relatedTerms": [
      "Affective modulation",
      "Affective computing"
    ]
  },
  "Computer vision": {
    "definition": "A field of AI focused on enabling machines to interpret and understand visual information from the world.",
    "relatedTerms": []
  },
  "Predictive modeling": {
    "definition": "Statistical and machine learning techniques used to forecast future events based on historical data.",
    "relatedTerms": []
  },
  "Platform capitalism": {
    "definition": "An economic model where digital platforms mediate and monetize social and economic interactions.",
    "relatedTerms": [
      "Platformed subjectivity"
    ]
  },
  "Cognitive extraction": {
    "definition": "The appropriation of mental labor, focus, and thought patterns for data-driven value production.",
    "relatedTerms": [
      "Cognitive offloading",
      "Neurocapitalism"
    ]
  },
  "Creative commons": {
    "definition": "A licensing framework that enables creators to share their works freely under flexible usage rights.",
    "relatedTerms": []
  },
  "Generative culture": {
    "definition": "Cultural production that emphasizes remixing, co-creation, and algorithmic or procedural aesthetics.",
    "relatedTerms": [
      "Post-internet art",
      "Hybrid aesthetics"
    ]
  },
  "Transmedia fluency": {
    "definition": "The ability to navigate, interpret, and create content across multiple media platforms and formats.",
    "relatedTerms": []
  },
  "Situated creation": {
    "definition": "Artistic and computational practices grounded in local, contextual, and embodied knowledge.",
    "relatedTerms": []
  },
  "Soft control": {
    "definition": "Subtle mechanisms of behavioral influence embedded in design, nudges, and feedback systems.",
    "relatedTerms": [
      "Micro-regulation",
      "Nudge design"
    ]
  },
  "Micro-regulation": {
    "definition": "Fine-grained governance mechanisms that act at the level of gesture, interface, and response.",
    "relatedTerms": []
  },
  "Interface syntax": {
    "definition": "The symbolic logic and behavioral cues embedded in interactive systems.",
    "relatedTerms": [
      "Code aesthetics"
    ]
  },
  "Code aesthetics": {
    "definition": "The expressive qualities and formal properties of software code and algorithmic structures.",
    "relatedTerms": [
      "Interface syntax"
    ]
  },
  "Embodied interaction": {
    "definition": "Interaction paradigms that incorporate bodily movement, sensation, and material engagement.",
    "relatedTerms": [
      "Interface syntax"
    ]
  },
  "Biofeedback": {
    "definition": "The monitoring and modulation of physiological signals in real-time, often for therapeutic or adaptive use.",
    "relatedTerms": []
  },
  "Quantified self": {
    "definition": "A practice of self-tracking using digital devices to analyze personal behavior and performance.",
    "relatedTerms": []
  },
  "Behavioral economics": {
    "definition": "A field that blends psychology and economics to understand how humans make decisions.",
    "relatedTerms": []
  },
  "Nudge design": {
    "definition": "Interface or environment design that subtly steers user behavior without restricting choice.",
    "relatedTerms": []
  },
  "Neurocapitalism": {
    "definition": "An economic regime in which neural and cognitive processes become sources of value and governance.",
    "relatedTerms": []
  },
  "Post-internet art": {
    "definition": "A genre of contemporary art that reflects on and engages with the internet as both a medium and context.",
    "relatedTerms": [
      "Generative culture",
      "Hybrid aesthetics"
    ]
  },
  "Live systems": {
    "definition": "Dynamic artworks or applications that respond in real-time to data, input, or environmental change.",
    "relatedTerms": []
  },
  "Cognitive offloading": {
    "definition": "The act of using external devices or tools to store, process, or manage information.",
    "relatedTerms": [
      "Cognitive extraction",
      "Neurocapitalism"
    ]
  },
  "Techno-embodiment": {
    "definition": "The integration of technological systems into the sensory and cognitive experiences of the body.",
    "relatedTerms": [
      "Technosubjectivity",
      "Techno-moral skill"
    ]
  },
  "Data colonialism": {
    "definition": "The extraction and control of data from populations in ways that echo historical forms of colonial domination.",
    "relatedTerms": [
      "Predictive governance"
    ]
  },
  "Predictive governance": {
    "definition": "Systems of control and decision-making based on forecasting and algorithmic prediction.",
    "relatedTerms": [
      "Post-cognitive governance"
    ]
  },
  "Techno-moral skill": {
    "definition": "The capacity to navigate ethical complexity in technologically mediated environments.",
    "relatedTerms": [
      "Technosubjectivity",
      "Relational autonomy",
      "Ethical resistance",
      "Techno-embodiment"
    ]
  },
  "Relational autonomy": {
    "definition": "A concept of autonomy that emphasizes interdependence and the social nature of agency.",
    "relatedTerms": [
      "Ethical resistance",
      "Techno-moral skill"
    ]
  }
};

export default glossaryMap;
