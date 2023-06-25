<script>
  import { v4 as uuid } from 'uuid'
  const phone = 56990612354 // TODO: change this to be xanara's phone
  let users = [
    {
      imgUrl: '/users/favicon.png',
      category: 'Inyectables',
      description: '',
      name: 'cldrojas',
      phone: 56990612354
    }
  ]
  let categories = [
    {
      id: uuid(),
      title: 'Inyectables',
      imgUrl: '/assets/icons/syringe.webp'
    },
    {
      id: uuid(),
      title: 'Cuidados',
      imgUrl: ''
    },
    {
      id: uuid(),
      title: 'Masajes',
      imgUrl: ''
    },
    {
      id: uuid(),
      title: 'Terapia',
      imgUrl: ''
    }
  ]
  let services = [
    {
      name: 'Suero',
      description: String,
      periodicity: String,
      price: Number,
      conditions: []
    },
    {
      name: 'Subcutaneas',
      description: String,
      periodicity: String,
      price: Number,
      conditions: []
    },
    {
      name: 'Intravenosas',
      description: String,
      periodicity: String,
      price: Number,
      conditions: []
    },
    {
      name: 'Intramusculares',
      description: String,
      periodicity: String,
      price: Number,
      conditions: []
    }
  ]

  let msg = ''

  export const showServiceRecord = (serviceId) => {
    console.log(`Open modal with service ${serviceId}`)
  }
</script>

<section id="serviceCategories" class="bg-red">
  <ul>
    {#each categories as category}
      <div class="max-w-sm mx-4 mb-8 bg-white rounded-lg shadow-md hover:shadow-xl">
        <button
          on:click={showServiceRecord(
            `Hola, soy ${category.name}, me gustaría consultar sobre ${category.category}`
          )}
        >
          <div class="px-6 py-4">
            <h3 class="text-xl font-bold mb-2">{category.title}</h3>
            <span class="inline-flex justify-evenly flex-shrink items-center">
              <img src={category.imgUrl} alt="category.altName" class="w-12" />
              <p class="text-gray-700 text-xs border-solid border-2 flex flex-shrink max-w-[100px]">
                {services.map((serv) => serv.name)}
              </p>
            </span>
          </div>
        </button>
      </div>
    {/each}
  </ul>
</section>
