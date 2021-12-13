<template>
  <v-container>
    <v-row class="pl-5 pr-5 mt-7 mb-7">
      <v-col align="center">
        <v-card>
          <v-card-title class="justify-center">
            
            <h1 class="montserrat-title">Preguntas frecuentes</h1>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="pl-5 pr-5 mt-7 mb-7">
      <v-col
        cols="12"

      >
        <v-expansion-panels accordion>
          <v-expansion-panel
            v-for="faq in faqs"
            :key="faq.id"
          >
            <v-expansion-panel-header>
              <b>{{faq.question}}</b>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{faq.answer}}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        
      </v-col>
    </v-row>
    <v-row class="pl-5 pr-5 mt-7 mb-7 text">
      <v-col
        cols="12"
        align="center"
      >
        <v-card>
          <v-card-text>
            
            <p>Si no encuentras alguna de tus preguntas aquí, comunícate con nosotros a través del correo:</p>
            <a class="text" href="mailto:contacto@eliteparking.es?Subject=Haznos%20una%20pregunta">contacto@eliteparking.es</a>
          </v-card-text>
        </v-card>
        
      </v-col>

    </v-row>

  </v-container>
</template>
<script>
  export default {
    name:'Faqs',
    data:()=>({
      faqs:[
      {
        id:1,
        question:'¿Métodos de pago?',
        answer:'El cliente podrá́ pagar al momento de hacer su reserva o cuando le entreguemos el vehículo. Podrá hacerlo de la manera más cómoda. (Efectivo, tpv, Paypal o Bizum).',
      },
      {
        id:2,
        question:'¿Cómo identificar al personal?',
        answer:'Los conductores llevaran un uniforme que estará identificado con el nombre de la empresa.'
      },
      {
        id:3,
        question:'¿Qué ocurre si mi vuelo se retrasa?',
        answer:'Deberá notificarlo para modificar la fecha y hora de la entrega de su vehículo.',
      },
      {
        id:4,
        question:'¿Qué tipo de seguro tenemos?',
        answer:'Disponemos de seguro de responsabilidad civil para cubrir cualquier incidencia que pueda ocurrir con el vehículo.',
      },
      {
        id:5,
        question:'¿Servicios adicionales?',
        answer:'Disponemos de servicio de limpieza interior y exterior.',
      }
      ]
    })
  }
</script>
