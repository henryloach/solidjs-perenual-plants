import { createResource } from 'solid-js';
import Card from '../components/Card';
import apiKey from '../../.api-key.js'

const fetchPlants = async () => {
    const res = await fetch(`https://perenual.com/api/species-list?key=${apiKey}`)

    return res.json()
}

function Home() {
    const [plants] = createResource(fetchPlants)
    return (
        <div class="grid grid-cols-4 gap-10 my-4">
            {/* <Card title="ninja tee"/> */}
            <Card rounded={true} flat={false}>
                <h2>Ninja Tee, Black</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex explicabo impedit vero, optio minus laborum.</p>
                <button class="btn">view!</button>
            </Card>
            <Card rounded={false} flat={true}>
                <h2>Ninja Tee, White</h2>
                <button class="btn">view!</button>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ea rerum fugit accusantium consectetur expedita.</p>
                <p>Only £10</p>
            </Card>

            <p>{console.log(plants(), plants.loading)}</p>
        </div>
    )
}

export default Home