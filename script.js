const modelViewer = document.querySelector('model-viewer');
			
window.switchSrc = (element, name) => {
  const GLBbase = "./GLB_Files/" + name;
	const WEBPbase = "./WEBP_Files/" + name;
  modelViewer.src = GLBbase + '.glb';
  modelViewer.poster = WEBPbase + '.webp';
	modelViewer.loading = 'eager';
  const slides = document.querySelectorAll(".slide");
  slides.forEach((element) => {element.classList.remove("selected");});
  element.classList.add("selected");
  document.getElementById('virus_info_title').textContent = virus_info_title(name);
  document.getElementById('virus_info_body').textContent = virus_info_body(name);
  document.getElementById('virus_info_symptoms').textContent = virus_info_symptoms(name);
};

function virus_info_title(virus) {
  return "About " + virus + ":";
}

function virus_info_body(virus) {
  if (virus === "Measles") {
    return "The Measles is a childhood viral infection that spreads throughout the body.";
  }
  else if (virus === "Norovirus") {
    return "The Norovirus is a highly contagious foodborne illness that causes diarrhea and vomiting.";
  }
  else if (virus === "BMV") {
    return "BMV is an RNA plant virus that causes mosiac symptoms in plants.";
  }
  else if (virus === "Rotavirus") {
    return "The Rotavirus is a common cause of diarrhea in infants and young children.";
  }
  else if (virus === "Zika") {
    return "The Zika virus is a mosquito-borne virus that can cause birth defects in the fetus of an infected pregnant woman.";
  }
  else if (virus === "HIV") {
    return "HIV is a virus that attacks the immune system and can lead to AIDS.";
  }
}

function virus_info_symptoms(virus) {
  if (virus === "Measles") {
    return "Symptoms: Cough, Runny nose, Rashes all over the body, Red and watery eyes, Small white spots inside the cheeks, High fever";
  }
  else if (virus === "Norovirus") {
    return "Symptoms: Diarrhea, Vomiting, Nausea, Stomach pain, Fever, Headache";
  }
  else if (virus === "BMV") {
    return "Symptoms: Mosaic patterns on leaves, Stunted growth, Leaf mottling, Curling of leaves, Reduced yield, Deformed fruits";
  }
  else if (virus === "Rotavirus") {
    return "Symptoms: Severe watery diarrhea, Vomiting, Fever, Abdominal pain, Dehydration";
  }
  else if (virus === "Zika") {
    return "If symptoms exist: A mild fever, Headahce, Joint pain, Red eyes, Muscle pain";
  }
  else if (virus === "HIV") {
    return "Symptoms: Rash, Sore throat, Swollen lymph nodes, Mouth ulcers, Night sweats, Fever";
  }
}

document.querySelector(".slider").addEventListener('beforexrselect', (ev) => {
  // Keep slider interactions from affecting the XR scene.
  ev.preventDefault();
});