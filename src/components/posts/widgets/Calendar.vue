<script setup>
  const props = defineProps([
    'title', 'desc', 'type',
  ])

    window.addEventListener('DOMContentLoaded', () => {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth();
    
    const day = document.querySelector(".calendar-dates");
    
    const currdate = document
        .querySelector(".calendar-current-date");
    
    const prenexIcons = document
        .querySelectorAll(".calendar-navigation span");
    
    const months = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ];
    

    const manipulate = () => {

        let dayone = new Date(year, month, 1).getDay();
    
        let lastdate = new Date(year, month + 1, 0).getDate();

        let dayend = new Date(year, month, lastdate).getDay();

        let monthlastdate = new Date(year, month, 0).getDate();
    
        let lit = "";
    
        for (let i = dayone; i > 0; i--) {
            lit +=
                `<li class="inactive">${monthlastdate - i + 1}</li>`;
        }
    
    
        for (let i = 1; i <= lastdate; i++) {
    
    
            let isToday = i === date.getDate()
                && month === new Date().getMonth()
                && year === new Date().getFullYear()
                ? "active"
                : "";
            lit += `<li class="${isToday}">${i}</li>`;
        }
    

        for (let i = dayend; i < 6; i++) {
            lit += `<li class="inactive">${i - dayend + 1}</li>`
        }
    
        currdate.innerText = `${months[month]} ${year}`;
    
        day.innerHTML = lit;
    }
 
    manipulate();

prenexIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            month = icon.id === "calendar-prev" ? month - 1 : month + 1;
    
            if (month < 0 || month > 11) {

                date = new Date(year, month, new Date().getDate());

                year = date.getFullYear();

                month = date.getMonth();
            } else {
                date = new Date();
            }
    
            manipulate();
        });
    });
    })
</script>
<template>
    <div :class="props.type + ' widget card mb-3'">
        <div class="card-body">
          <h5 class="card-title">{{title}}</h5>
          <p class="card-text">{{desc}}</p>
          <div class="calendar-container">
            <header class="calendar-header">
                <p class="calendar-current-date"></p>
                <div class="calendar-navigation">
                    <span id="calendar-prev"
                          class="material-symbols-rounded">
                          <iconify-icon icon="material-symbols:chevron-left"></iconify-icon>
                    </span>
                    <span id="calendar-next"
                          class="material-symbols-rounded">
                       
                        <iconify-icon icon="material-symbols:chevron-right"></iconify-icon>
                    </span>
                </div>
            </header>
     
            <div class="calendar-body">
                <ul class="calendar-weekdays">
                    <li>Dom</li>
                    <li>Lun</li>
                    <li>Mar</li>
                    <li>Mie</li>
                    <li>Jue</li>
                    <li>Vie</li>
                    <li>Sab</li>
                </ul>
                <ul class="calendar-dates"></ul>
            </div>
        </div>
        </div>
      </div>
</template>
<style scoped>
    .modal {
        display: flex;
    }

    .widget .trendings {
      display:flex !important;
      flex-direction:row !important;
      align-items: center !important;
      /*background:blue;
*/
    }

    .trendings button {
     background:none;
     border:none;
     padding:8px 10px;
     display:flex;
     background:#f7f7f7;
     margin:5px 0px;
     align-items:center;
     justify-content: center;
    }
</style>