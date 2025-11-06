function total() {
    const q1 = document.getElementById("q1").value;
    const q2 = document.getElementById("q2").value;
    const q3 = document.getElementById("q3").value;
    const q4 = document.getElementById("q4").value;
    const q5 = document.getElementById("q5").value;
    const q6 = document.getElementById("q6").value;
    const q7 = document.getElementById("q7").value;
    const q8 = document.getElementById("q8").value;
    const q9 = document.getElementById("q9").value;
    const q10 = document.getElementById("q10").value;
  
    const userAnswers = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
  
    const correctAnswers = ["c", "b", "b", "b", "b", "a", "c", "b", "b", "b"];
  
    const explanations = [
      "let déclare une variable mutable avec portée de bloc.",
      "En JS, les tableaux sont des objets ; typeof [] retourne 'object'.",
      "== effectue une coercition de type avant de comparer, === est strict.",
      "map applique une fonction à chaque élément et retourne un nouveau tableau.",
      "Les flèches n'ont pas leur propre this — elles capturent le this extérieur.",
      "JSON.stringify(obj) produit une chaîne JSON représentant obj.",
      "Promise.resolve crée une promesse immédiatement résolue avec la valeur donnée.",
      "reduce additionne les éléments : 0 + 1 + 2 + 3 = 6.",
      "async fait que la fonction retourne une promesse ; await peut être utilisé dans son corps.",
      "addEventListener est la méthode standard pour attacher un écouteur d'événement."
    ];
  
    let score = 0;
    let correctionText = "";
  
    for (let i = 0; i < 10; i++) {
      if (userAnswers[i] === correctAnswers[i]) {
        score++;
      } else {
        correctionText += `<p><strong>Question ${i + 1} :</strong> Mauvaise réponse ❌<br>
        Ta réponse : ${userAnswers[i].toUpperCase()}<br>
        Bonne réponse : ${correctAnswers[i].toUpperCase()}<br>
        <em>Explication :</em> ${explanations[i]}</p>`;
      }
    }
  
    document.getElementById("total").innerHTML = `
      <h3>Résultat : ${score}/10 - ${comment(score)}</h3>
      ${correctionText}
    `;
  }
  
  function comment(total) {
    if (total <= 4) return "Réessaye ! 😅";
    else if (total <= 6) return "Pas mal ! 👍";
    else if (total <= 8) return "Presque ! 👏";
    else return "Bien joué ! 🥳";
  }
  