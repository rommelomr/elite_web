<template>
  <v-container>
    <v-card>
      <v-card-title class="justify-center">

          Reserva registrada exitosamente

      </v-card-title>
      <v-card-text>

        <center>
          <p>Los datos de su reserva han sido enviados a la dirección de correo especificada.</p><br>

          <p>IMPORTANTE</p>
          <p>Recuerde que la recepción y devolución de coches entre la <u>1:00 am y las 5:00 am</u><br> conlleva un recargo en la tarifa de un día de servicio.</p>
          <br>
          <p><b>Datos de la reserva:</b></p>
        </center>
        <v-row>
          <v-col cols="12" align="center">
            <p><b>Número de reserva:</b> {{id}}</p>            
          </v-col>
        </v-row>
        <v-row>

          <v-col
            cols="12"
            md="6"
            align="center"
          >
            <p><b>Datos del vehículo:</b></p>
            <p><b>Marca:</b> {{brand}}</p>
            <p><b>Modelo:</b> {{model}}</p>
            <p><b>Placa:</b> {{plaque}}</p>
          </v-col>
          <v-col
            cols="12"
            md="6"
            align="center"
          >
            <p><b>Datos de la reserva:</b></p>
            <p><b>Recogida:</b>  {{reception_date}}</p>
            <p><b>Terminal:</b> Terminal {{reception_terminal}}</p>
            <p><b>Devolución:</b> {{devolution_date}}</p>
            <p><b>Terminal:</b> Terminal {{devolution_terminal}}</p>
          </v-col>
          
        </v-row>
        <v-row>
          <v-col cols="12" align="center">
            <p><b>Total a pagar:</b> {{price}} €</p>
          </v-col>
        </v-row>

        <v-row>
          <v-col align="center">
            <v-btn
              color="purple"
              elevation="1"
              outlined
              @click="$router.push('/')"
            >
              Ir al inicio
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-snackbar
        v-model="snackbar"
      >
        {{ snackbar_text }}
    </v-snackbar>
  </v-container>
</template>
<script>

  import {mapFields} from 'vuex-map-fields';

  export default {
    name:'ReservationConfirmation',
    data:()=>({
      snackbar: false,
      snackbar_text: '',

      id: '',
      brand: '',
      model: '',
      plaque: '',
      reception_date: '',
      devolution_date: '',
      reception_terminal: '',
      devolution_terminal: '',
      extra_service: '',
      reservation_setted: false,
      price: '',
    }),
    mounted(){
      if(this.$route.query.success == 1){

        this.snackbar = true;
        this.snackbar_text = 'Su pago se ha realizado satisfactoriamente';

      }else if(this.$route.query.success == 0){

        this.snackbar = true;
        this.snackbar_text = 'Su pago no pudo ser realizado';

      }
      
      if(!this.stored_reservation_setted && process.env.NODE_ENV === 'production'){

        this.$router.push('/');
      }else{
        this.id = this.stored_id;
        this.brand = this.stored_brand;
        this.model = this.stored_model;
        this.plaque = this.stored_plaque;
        this.reception_date = this.stored_reception_date;
        this.devolution_date = this.stored_devolution_date;
        this.reception_terminal = this.stored_reception_terminal;
        this.devolution_terminal = this.stored_devolution_terminal;
        this.extra_service = this.stored_extra_service;
        this.reservation_setted = this.stored_reservation_setted;
        this.price = this.stored_price;

        this.stored_id = '';
        this.stored_brand = '';
        this.stored_model = '';
        this.stored_plaque = '';
        this.stored_reception_date = '';
        this.stored_devolution_date = '';
        this.stored_reception_terminal = '';
        this.stored_devolution_terminal = '';
        this.stored_extra_service = '';
        this.stored_reservation_setted = false;
        this.stored_price = '';
      }
    },
    computed:{
      ...mapFields({

        stored_reservation_setted:'confirmed_reservation.confirmed_reservation_setted',
        stored_id:'confirmed_reservation.id',
        stored_brand:'confirmed_reservation.brand',
        stored_model:'confirmed_reservation.model',
        stored_plaque:'confirmed_reservation.plaque',
        stored_reception_date:'confirmed_reservation.reception_date',
        stored_devolution_date:'confirmed_reservation.devolution_date',
        stored_reception_terminal:'confirmed_reservation.reception_terminal',
        stored_devolution_terminal:'confirmed_reservation.devolution_terminal',
        stored_extra_service:'confirmed_reservation.extra_service',
        stored_price:'confirmed_reservation.price',
        

      }),
    },

  }

</script>
<style>
  .card-title{
    text-align: center !important;
  }
</style>