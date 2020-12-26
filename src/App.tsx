import { defineComponent, reactive, ref } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

const img = require('./assets/logo.png') //eslint-disable-line

const App = defineComponent({
  setup() {
    const state = reactive({
      name: 'xxx'
    })

    const numberRef = ref(1)

    setInterval(() => {
      state.name += '1'
      numberRef.value += 1
    }, 1000)

    const renderHelloWorld = (str: string) => <HelloWorld msg={str} />

    // 不要在这里写, setup只会执行一次
    // const number = numberRef.value

    return () => {
      const number = numberRef.value

      return (
        <div id="app">
          <img src={img} alt=" Vue logo" />
          <p>{state.name + number}</p>
          {renderHelloWorld('123')}
        </div>
      )
    }
  }
})

export default App
