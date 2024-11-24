// Q1
    const totalSubjects = 5;
    let marksMath = 87;
    let marksEnglish = 95;
    let marksScience = 90;
    let marksHistory = 85;
    let marksComputer = 95;
    let totalMarks = marksMath + marksEnglish + marksScience + marksHistory + marksComputer;
    let percentage = (totalMarks / (totalSubjects * 100)) * 100;
let grade=percentage >= 90?"A":percentage >= 75?"B":percentage >= 50?"C":"D"
    document.write(`
      <h2>Mark Sheet</h2>
      <p>Math: ${marksMath}</p>
      <p>English: ${marksEnglish}</p>
      <p>Science: ${marksScience}</p>
      <p>History: ${marksHistory}</p>
      <p>Computer: ${marksComputer}</p>
      <p><strong>Total Marks: ${totalMarks} / ${totalSubjects * 100}</strong></p>
      <p><strong>Percentage: ${percentage.toFixed(2)}%</strong></p>
      <p><strong>Grade: ${grade}</strong></p>
    `);
    // Q2
      const mobileModels = {
        'Samsung': ['Galaxy S23', 'Galaxy Note 20', 'Galaxy A52'],
        'Apple': ['iPhone 15', 'iPhone 14', 'iPhone SE'],
        'OnePlus': ['OnePlus 11', 'OnePlus 9', 'OnePlus Nord CE']
    };

    function updateModels() {
        const brand = document.getElementById("brand").value;
        const modelDropdown = document.getElementById("model");
        
        modelDropdown.innerHTML = '<option value="">Select Model</option>';
        
        if (brand) {
            const models = mobileModels[brand];
            for (let i = 0; i < models.length; i++) {
                const option = document.createElement("option");
                option.value = models[i];
                option.textContent = models[i];
                modelDropdown.appendChild(option);
            }
        }
    }

    function showSelection() {
        const brand = document.getElementById("brand").value;
        const model = document.getElementById("model").value;

        if (brand && model) {
            document.getElementById("output").innerHTML = `You have selected:<br>Brand: ${brand}<br>Model: ${model}`;
        } else {
            document.getElementById("output").innerHTML = 'Please select both a brand and a model.';
        }
    }