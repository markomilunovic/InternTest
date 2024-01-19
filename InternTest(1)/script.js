
    async function promotions(promotionType) {
      const promotionsList = document.getElementById("promotionsList");
    
      try {
        promotionsList.innerText = "";
    
        // Fetch promotions data
        const response = await fetch("./data.json", { mode: "no-cors" });
    
        const data = await response.json();
    
        // Sort promotions based on the sequence property
        const sortedPromotions = data.sort((a, b) => a.sequence - b.sequence);
    
        if (promotionType === "All") {
          // Render all promotions
          renderPromotions(sortedPromotions);
        } else if (promotionType === "New") {
          // Filter promotions based on onlyNewCustomers flag
          const filteredPromotions = sortedPromotions.filter(
            (promotion) => promotion.onlyNewCustomers
          );
    
          // Render filtered promotions
          renderPromotions(filteredPromotions);
        }
      } catch (error) {
        console.error("Error fetching promotions:", error);
      }
    }
    
    

    function renderPromotions(promotions) {
        const promotionsList = document.getElementById("promotionsList")
      promotions.forEach((promotion) => {
        const promotionElement = document.createElement("div");
        promotionElement.classList.add('promotion')
        promotionElement.innerHTML = `
        <img src="${promotion.heroImageUrl}">
          <h2>${promotion.name}</h2>
          <p>${promotion.description}</p>
          <button>${promotion.termsAndConditionsButtonText}</button>
          <button>${promotion.joinNowButtonText}</button>
        `;
        promotionsList.appendChild(promotionElement);
      });
    }
