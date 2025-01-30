const app = Vue.createApp({});

const Home = {
  methods: {
    onSubmit() {
      console.log('Går till page');
      this.$router.push('/page');
    },
  },
  template: `
    <h1 style="font-family: sans-serif;">HESA FREDRIK</h1>
      <input @click="onSubmit" type="button" value="Starta spel" />
    
    `,
};
const Page = {
  data() {
    return {
      answerOptions: [
        { id: 1, answer: '1-2 liter' },
        { id: 2, answer: '3-4 liter' },
        { id: 3, answer: '5-6 liter' },
        { id: 4, answer: '7-8 liter' },
      ],
      questions: [
        { id: 1, question: 'Hur många liter vatten bör du ha hemma?' },
      ],
    };
  },
  template: `
    <h1>{{$route.params.page}}</h1>
    <form>
        <p v-for="question in questions">{{question.question}}</p>
        <label v-for="(answerOption, key) in answerOptions" for="answerOption"
          ><input type="radio" name="answerOption" id="answerOption" />
          {{answerOption.answer}}</label
        >
        <input type="submit" value="Svara" />
      </form>
    `,
};

const routes = [
  { component: Home, path: '/' },
  { component: Page, path: '/:page' },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

app.use(router);

app.mount('#app');
