Vue.config.devtools = true;

var app = new Vue({
  el: "#root",
  data: {
    searchContact: "",
    visibility: ["hide"],
    lastView: ["visible"],
    message_menu: ["hide"],

    user: {
      name: "Noemi Rea",
      avatar: "_io",
      visible: true,
    },

    newtext: "",
    avatarCounter: 0,
    messageCounter: 0,
    contacts: [
      {
        name: "Michele",
        avatar: "_1",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Hai portato a spasso il cane?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Ricordati di dargli da mangiare",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15:22",
            text: "Tutto fatto!",
            status: "received",
          },
        ],
      },
      {
        name: "Fabio",
        avatar: "_2",
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30:00",
            text: "Ciao come stai?",
            status: "sent",
          },
          {
            date: "20/03/2020 16:30:55",
            text: "Bene grazie! Stasera ci vediamo?",
            status: "received",
          },
          {
            date: "20/03/2020 16:35:00",
            text: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "sent",
          },
        ],
      },
      {
        name: "Samuele",
        avatar: "_3",
        visible: true,
        messages: [
          {
            date: "28/03/2020 10:10:40",
            text: "La Marianna va in campagna",
            status: "received",
          },
          {
            date: "28/03/2020 10:20:10",
            text: "Sicuro di non aver sbagliato chat?",
            status: "sent",
          },
          {
            date: "28/03/2020 16:15:22",
            text: "Ah scusa!",
            status: "received",
          },
        ],
      },
      {
        name: "Luisa",
        avatar: "_4",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Si, ma preferirei andare al cinema",
            status: "received",
          },
        ],
      },
    ],
  },

  methods: {
    setSelectedConversation(index) {
      this.avatarCounter = index;
    },
    sendText: function () {
      this.visibility = "visible";
      this.lastView = "hide";
      this.contacts[this.avatarCounter].messages.push({
        date: dayjs().format("DD/MM/YYYY hh:mm:ss"),
        text: this.newtext,
        status: "sent",
      });
      this.newtext = "";
      setTimeout(this.receivedText, 1000);
    },

    receivedText: function () {
      this.visibility = "hide";
      this.lastView = "visible";
      this.contacts[this.avatarCounter].messages.push({
        date: dayjs().format("DD/MM/YYYY hh:mm:ss"),
        text: "ok",
        status: "received",
      });
    },
    search: function () {
      this.searchContact = this.searchContact.toLowerCase();
      console.log(this.searchContact);
      if (this.searchContact.length == 0) {
        this.contacts.forEach((element, index) => {
          this.contacts[index].visible = true;
        });
      } else {
        this.contacts.forEach((element, index) => {
          for (var i = 0; i < this.searchContact.length; i++) {
            if (this.searchContact[i] == element.name[i].toLowerCase()) {
              this.contacts[index].visible = true;
            } else {
              this.contacts[index].visible = false;
              break;
            }
          }
        });
      }
    },
    option(index) {
      this.messageCounter = this.contacts[this.avatarCounter].messages[index];
      console.log(this.message_menu);

      console.log(this.messageCounter);
      console.log(index);
    },
  },
});
