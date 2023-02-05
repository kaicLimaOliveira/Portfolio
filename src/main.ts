import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/routes";
import "../node_modules/bulma/bulma.sass"

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
    faBars,
    faDatabase,
    faCode,
    faCodeCommit,
    faLaptopCode,
} from "@fortawesome/free-solid-svg-icons"

import {
    faLinkedin,
    faGithub,
    faFigma,
    faVuejs,
    faPython,
    faJsSquare,
    faSass,
} from "@fortawesome/free-brands-svg-icons"


library.add(
    faBars,
    faLinkedin,
    faGithub,
    faDatabase,
    faCode,
    faCodeCommit,
    faLaptopCode,
    faFigma,
    faVuejs,
    faPython,
    faJsSquare,
    faSass,
)

const app = createApp(App)
app.component('Icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
