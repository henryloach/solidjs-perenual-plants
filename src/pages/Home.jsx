import { createResource } from 'solid-js';
import Card from '../components/Card';
import apiKey from '../../.api-key.js'

const stockUrl = "./src/assets/stock_plant.jpg"

const fetchPlants = async () => {
    const res = await fetch(`https://perenual.com/api/species-list?key=${apiKey}`)
    const body = await res.json()
    return body.data
}

function Home() {
    const [plants] = createResource(fetchPlants)
    return (
        <Show when={plants()} fallback={<p>Loading...</p>}>   
            <div class="grid grid-cols-4 gap-10 my-4">
                <For each={plants()}>
                    {plant => (
                        <Card rounded={true} flat={true}>
                            <img src={plant.default_image?.medium_url || stockUrl} alt="plant" />
                            <h2 class="my-3 font-bold">{plant.common_name}</h2>
                            <a href={"/plant/" + plant.id} class="btn">View Plant Details</a>
                        </Card>
                    )}
                </For>
            </div>
        </Show>
    )
}

export default Home