import { useParams } from "@solidjs/router"
import { createResource } from "solid-js"
import apiKey from "../../.api-key"

const stockUrl = "./src/assets/stock_plant.jpg"

const fetchPlant = async (id) => {
    const res = await fetch(`https://perenual.com/api/species/details/${id}?key=${apiKey}`)
    return res.json()
}

function Plant() {
    const params = useParams()

    const [plant] = createResource(params.id, fetchPlant)

    return (
        <div class="my-7">
            <Show when={plant()} fallback={<p>Loading...</p>} >
                <div class="grid grid-cols-5 gap-7">

                    <div class="col-span-2">
                        <img src={plant().default_image?.regular_url || stockUrl} alt="plant" />
                    </div>

                    <div class="col-span-3">
                        <h2 class="text-3xl font-bold mb-7">{plant().common_name}</h2>
                        <p>{plant().description}</p>
                        <p class="my-7 text-2xl">type : {plant().type}</p>
                    </div>

                </div>
            </Show>
        </div>
    )
}

export default Plant