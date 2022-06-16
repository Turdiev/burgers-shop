import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      burgers: [
        {
          id: 0,
          name: 'Burger Dreams',
          price: 9.20,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'burgers/burger-dreams.png',
        },
        {
          id: 1,
          name: 'Burger Waldo',
          price: 10.00,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'burgers/burger-waldo.png',
        },
        {
          id: 2,
          name: 'Burger Cali',
          price: 8.00,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'burgers/burger-cali.png',
        },
        {
          id: 3,
          name: 'Burger Bacon Buddy',
          price: 9.99,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'burgers/burger-bacon-buddy.png',
        },
        {
          id: 4,
          name: 'Burger Spicy',
          price: 9.20,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'burgers/burger-spicy.png',
        },
        {
          id: 5,
          name: 'Burger Classic',
          price: 8.00,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'burgers/burger-classic.png',
        },
      ],
      hotDog: [
        {
          id: 0,
          name: 'Alabama',
          price: 9.20,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'hot-dog/alabama.jpeg',
        },
        {
          id: 1,
          name: 'Alaska',
          price: 10.00,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'hot-dog/alaska.jpg',
        },
        {
          id: 2,
          name: 'Arizona',
          price: 8.00,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'hot-dog/arizona.jpeg',
        },
        {
          id: 3,
          name: 'Idaho',
          price: 9.99,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'hot-dog/idaho.jpeg',
        },
        {
          id: 4,
          name: 'Iowo',
          price: 9.20,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'hot-dog/iowa.jpg',
        },
        {
          id: 5,
          name: 'Wyoming',
          price: 8.00,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'hot-dog/wyoming.jpg',
        },
      ],
      drinks: [
        {
          id: 0,
          name: 'Old Fashioned',
          price: 9.20,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'drinks/old-fashioned.jpg',
        },
        {
          id: 1,
          name: 'Margarita',
          price: 10.00,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'drinks/margarita.jpg',
        },
        {
          id: 2,
          name: 'Cosmopolitan',
          price: 8.00,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'drinks/cosmopolitan.webp',
        },
        {
          id: 3,
          name: 'Negroni',
          price: 9.99,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'drinks/negroni.jpg',
        },
        {
          id: 4,
          name: 'Martini',
          price: 9.20,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'drinks/martini.jpg',
        },
        {
          id: 5,
          name: 'Mojito',
          price: 8.00,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'drinks/mojito.jpg',
        },
      ],
      basket: [],
  },
  getters: {
    GetCountProducts(state) {
      return state.basket.length;
    }
  },
  mutations: {
    THE_ADD_PRODUCT(state, payload) {
      state.basket.push(payload);
    },

    THE_CHANGE_BASKET(state, payload) {
      state.basket = payload
    },

    THE_CHANGE_AMOUNT_PRODUCT(state, payload) {
      state.basket.forEach(product => {
        if(product.id === payload.id) {
          product.count = payload.count;
          product.total = +(product.price * payload.count).toFixed(2);
        }
      });
    }
  },
  actions: {
    AddItemToCart({commit}, payload) {
      commit('THE_ADD_PRODUCT', payload);
    },

    RemoveProductToCard({state, commit}, payload) {
     let newBasket = state.basket.filter(item => {
        if(item.id !== payload) {
          return item;
        }
      })
      commit('THE_CHANGE_BASKET', newBasket);
    },

    ChangeAmountProduct({commit}, payload) {
      commit('THE_CHANGE_AMOUNT_PRODUCT', payload);
    }
  },
  modules: {
  }
})
