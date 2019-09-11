import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: [{
      "id": 1,
      "title": "quis justo",
      "body": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      "tags": [
        "Aquamarine"
      ],
      "creation_date": "1549926106",
      "edited_date": "1564486868"
    }, {
      "id": 2,
      "title": null,
      "body": null,
      "tags": [
        "Aquamarine"
      ],
      "creation_date": "1541664745",
      "edited_date": "1547148652"
    }, {
      "id": 3,
      "title": "eget semper rutrum nulla nunc purus phasellus in felis donec",
      "body": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
      "tags": [
        "Aquamarine"
      ],
      "creation_date": "1558837066",
      "edited_date": "1536468025"
    }, {
      "id": 4,
      "title": "tortor id nulla",
      "body": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      "tags": [
        "Yellow"
      ],
      "creation_date": "1537464867",
      "edited_date": "1541448798"
    }, {
      "id": 5,
      "title": "integer a nibh in quis justo",
      "body": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      "tags": [
        "Goldenrod"
      ],
      "creation_date": "1561201386",
      "edited_date": "1562609870"
    }, {
      "id": 6,
      "title": "nulla elit ac nulla sed",
      "body": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      "tags": [
        "Turquoise"
      ],
      "creation_date": "1556032224",
      "edited_date": "1564225504"
    }, {
      "id": 7,
      "title": "pede morbi porttitor lorem id ligula suspendisse ornare consequat",
      "body": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      "tags": [
        "Goldenrod"
      ],
      "creation_date": "1549742182",
      "edited_date": "1553285911"
    }, {
      "id": 8,
      "title": "orci vehicula condimentum curabitur in libero ut massa",
      "body": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      "tags": [
        "Khaki"
      ],
      "creation_date": "1542150079",
      "edited_date": "1565360528"
    }, {
      "id": 9,
      "title": null,
      "body": null,
      "tags": [
        "Puce"
      ],
      "creation_date": "1562056368",
      "edited_date": "1554656317"
    }, {
      "id": 10,
      "title": "mi pede malesuada in imperdiet et",
      "body": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      "tags": [
        "Teal"
      ],
      "creation_date": "1554980069",
      "edited_date": "1538525743"
    }],
  },
  mutations: {

  },
  actions: {

  }
})
