const questions = [
    {
        id: 1,
        question_text: "Which statement best describes basic research?",
        options: {
            A: "It evaluates treatment safety in patients",
            B: "It is curiosity-driven without immediate practical goals",
            C: "It establishes clinical guidelines",
            D: "It focuses on population health outcomes"
        },
        correct_answer: "B",
        explanation: "Basic research is curiosity-driven and aims to understand nature and its laws without immediate practical application."
    },
    {
        id: 2,
        question_text: "Clinical practice and therapy mainly aim to:",
        options: {
            A: "Discover natural laws",
            B: "Define best treatments for patients",
            C: "Generate animal models",
            D: "Study isolated biomolecules"
        },
        correct_answer: "B",
        explanation: "Clinical practice focuses on defining safe and effective treatments and establishing guidelines for patients."
    },
    {
        id: 3,
        question_text: "Translational research is best defined as:",
        options: {
            A: "Purely laboratory-based research",
            B: "Clinical guideline development",
            C: "Multidirectional integration of research disciplines",
            D: "Replacement of animal experiments"
        },
        correct_answer: "C",
        explanation: "Translational research integrates basic, patient-oriented, and population-based research to improve public health."
    },
    {
        id: 4,
        question_text: "Forward translation refers to:",
        options: {
            A: "Bedside to bench",
            B: "Bench to bedside",
            C: "Population to clinic",
            D: "In vivo to in vitro"
        },
        correct_answer: "B",
        explanation: "Forward translation moves discoveries from basic research into clinical application."
    },
    {
        id: 5,
        question_text: "Reverse translation describes:",
        options: {
            A: "Drug approval after clinical trials",
            B: "Clinical findings guiding basic research",
            C: "Animal research guiding population studies",
            D: "In vitro experiments guiding therapy"
        },
        correct_answer: "B",
        explanation: "Reverse translation brings clinical observations back to basic research to explore mechanisms."
    },
    {
        id: 6,
        question_text: "Pre-clinical studies are performed:",
        options: {
            A: "After phase II trials",
            B: "Before any testing in humans",
            C: "Only in healthy volunteers",
            D: "After market approval"
        },
        correct_answer: "B",
        explanation: "Pre-clinical studies are conducted before any testing in humans begins."
    },
    {
        id: 7,
        question_text: "Which example represents an in vitro study?",
        options: {
            A: "Drug testing in volunteers",
            B: "Experiments in living animals",
            C: "Experiments on isolated cells or components",
            D: "Surgical intervention in pigs"
        },
        correct_answer: "C",
        explanation: "In vitro studies involve isolated cells, tissues, or biological components outside their normal environment."
    },
    {
        id: 8,
        question_text: "Ex vivo experiments are characterized by:",
        options: {
            A: "Complete isolation from biological context",
            B: "Whole-organism measurements",
            C: "Tissue measurements outside the organism with minimal alteration",
            D: "Exclusive use of immortalized cell lines"
        },
        correct_answer: "C",
        explanation: "Ex vivo studies are done on tissues outside the organism while preserving natural conditions as much as possible."
    },
    {
        id: 9,
        question_text: "In vivo research involves:",
        options: {
            A: "Cell cultures",
            B: "Computer simulations",
            C: "Whole living organisms",
            D: "Isolated proteins"
        },
        correct_answer: "C",
        explanation: "In vivo research is performed in whole living organisms, including animals or humans."
    },
    {
        id: 10,
        question_text: "Patient-oriented research is defined as:",
        options: {
            A: "Research without human subjects",
            B: "Research directly interacting with human subjects",
            C: "Studies using anonymized tissue only",
            D: "Population modeling studies"
        },
        correct_answer: "B",
        explanation: "Patient-oriented research involves direct interaction with human subjects."
    },
    {
        id: 11,
        question_text: "Epidemiologic and behavioral studies focus on:",
        options: {
            A: "Molecular mechanisms",
            B: "Disease distribution and behavior",
            C: "Cell signaling pathways",
            D: "Device development"
        },
        correct_answer: "B",
        explanation: "These studies examine disease patterns, risk factors, and behaviors in populations."
    },
    {
        id: 12,
        question_text: "Minimum information for in vitro studies includes:",
        options: {
            A: "Animal handling and euthanasia",
            B: "Ethical statement, methods, design, and statistics",
            C: "Market approval documentation",
            D: "Long-term safety monitoring"
        },
        correct_answer: "B",
        explanation: "In vitro studies require clear reporting of ethics, procedures, study design, and statistics."
    },
    {
        id: 13,
        question_text: "Compared to in vitro studies, in vivo studies require:",
        options: {
            A: "Less documentation",
            B: "No ethical approval",
            C: "Extended guidelines including animal model details",
            D: "Only outcome measures"
        },
        correct_answer: "C",
        explanation: "In vivo studies require extended documentation due to ethical and animal welfare considerations."
    },
    {
        id: 14,
        question_text: "Which item is specifically required for in vivo studies?",
        options: {
            A: "Cell line authentication",
            B: "Anesthesia and euthanasia description",
            C: "Market certification",
            D: "Meta-analysis"
        },
        correct_answer: "B",
        explanation: "In vivo studies must report anesthesia and euthanasia procedures."
    },
    {
        id: 15,
        question_text: "Which is NOT part of in vivo minimum information?",
        options: {
            A: "Blinding procedures",
            B: "Training of experimenters",
            C: "Equipment calibration",
            D: "Journal impact factor"
        },
        correct_answer: "D",
        explanation: "Journal impact factor is unrelated to experimental reporting requirements."
    },
    {
        id: 16,
        question_text: "Which of the following belongs to medical product regulations?",
        options: {
            A: "Ethical theories",
            B: "Quality management",
            C: "Gene expression analysis",
            D: "Animal breeding"
        },
        correct_answer: "B",
        explanation: "Quality management is a core component of medical product regulations."
    },
    {
        id: 17,
        question_text: "Cyber security is especially relevant for:",
        options: {
            A: "Basic research",
            B: "Epidemiological studies",
            C: "Implantable medical devices",
            D: "In vitro assays"
        },
        correct_answer: "C",
        explanation: "Implantable devices often process data, making cyber security essential."
    },
    {
        id: 18,
        question_text: "Phase I clinical trials mainly investigate:",
        options: {
            A: "Long-term efficacy",
            B: "Safety and dosage",
            C: "Rare adverse events",
            D: "Post-market effects"
        },
        correct_answer: "B",
        explanation: "Phase I trials primarily assess safety and determine appropriate dosage."
    },
    {
        id: 19,
        question_text: "Phase II clinical trials usually include:",
        options: {
            A: "Healthy volunteers only",
            B: "Patients with the disease or condition",
            C: "Several thousand participants",
            D: "Approved therapies"
        },
        correct_answer: "B",
        explanation: "Phase II trials test efficacy and side effects in patients with the disease."
    },
    {
        id: 20,
        question_text: "Phase III clinical trials are designed to:",
        options: {
            A: "Explore molecular mechanisms",
            B: "Confirm efficacy and monitor adverse reactions",
            C: "Establish dosage range",
            D: "Replace phase II trials"
        },
        correct_answer: "B",
        explanation: "Phase III trials confirm efficacy and monitor adverse reactions, including rare ones."
    },
    {
        id: 21,
        question_text: "Phase IV clinical trials are conducted:",
        options: {
            A: "Before market approval",
            B: "In healthy volunteers",
            C: "After therapy approval",
            D: "Without regulatory oversight"
        },
        correct_answer: "C",
        explanation: "Phase IV trials take place after approval to monitor long-term safety and effectiveness."
    },
    {
        id: 22,
        question_text: "Which animal model has a fully publicly available genome?",
        options: {
            A: "Mus sp.",
            B: "Rattus sp.",
            C: "Danio rerio",
            D: "Oryctolagus cuniculus"
        },
        correct_answer: "C",
        explanation: "The zebrafish(Danio rerio) genome is fully sequenced and publicly available."
    },
    {
        id: 23,
        question_text: "Which animal is nocturnal and commonly genetically modified?",
        options: {
            A: "Rattus sp.",
            B: "Mus sp.",
            C: "Ovis orientalis aries",
            D: "Oryctolagus cuniculus"
        },
        correct_answer: "B",
        explanation: "Mice are nocturnal rodents and the most widely used genetically modified models."
    },
    {
        id: 24,
        question_text: "Sprague Dawley and Wistar are strains of:",
        options: {
            A: "Mus sp.",
            B: "Rattus sp.",
            C: "sus scrofa forma domesticus",
            D: "Oryctolagus cuniculus"
        },
        correct_answer: "B",
        explanation: "Sprague Dawley and Wistar are common rat strains."
    },
    {
        id: 25,
        question_text: "Oryctolagus cuniculus are especially used for:",
        options: {
            A: "Cardiac device implantation",
            B: "Serum collection and immunology",
            C: "Genetic knock-out studies",
            D: "Coronary bypass surgery"
        },
        correct_answer: "B",
        explanation: "Rabbits are widely used in immunology, pathology, and for serum collection."
    },
    {
        id: 26,
        question_text: "Pigs are frequently used in research for:",
        options: {
            A: "Cell signaling studies",
            B: "Device therapy and surgical procedures",
            C: "Behavioral neuroscience",
            D: "Developmental genetics"
        },
        correct_answer: "B",
        explanation: "Pigs are suitable for device testing and surgical research due to anatomical similarity."
    },
    {
        id: 27,
        question_text: "Minipigs should be used cautiously because they:",
        options: {
            A: "Cannot undergo surgery",
            B: "Show different disease behavior",
            C: "Lack coronary arteries",
            D: "Are nocturnal"
        },
        correct_answer: "B",
        explanation: "Minipigs may show disease behavior different from standard pig models."
    },
    {
        id: 28,
        question_text: "Macaca mulatta is especially valuable due to:",
        options: {
            A: "Short lifespan",
            B: "Low genetic similarity to humans",
            C: "High similarity to human conditions",
            D: "Ease of genetic modification"
        },
        correct_answer: "C",
        explanation: "Rhesus macaques closely resemble humans genetically and physiologically."
    },
    {
        id: 29,
        question_text: "Compared to humans, large animal hearts often show:",
        options: {
            A: "No trabeculation",
            B: "Identical heart shape",
            C: "Coarser ventricular trabeculation",
            D: "Smaller ventricles"
        },
        correct_answer: "C",
        explanation: "Animal hearts typically have a coarser degree of ventricular trabeculation."
    },
    {
        id: 30,
        question_text: "Humans most commonly display which coronary perfusion pattern?",
        options: {
            A: "Left coronary dominance",
            B: "Balanced coronary supply",
            C: "Right coronary dominance",
            D: "No dominance"
        },
        correct_answer: "C",
        explanation: "About 90% of humans show right coronary dominance."
    }

];
