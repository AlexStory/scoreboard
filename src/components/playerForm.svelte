<script>
    import { players } from '../stores/players.js'
    let name = ''
    let score = 0

    const onSubmit = e => {
        e.preventDefault()
        players.addPlayer({ name, score })
        name = ''
        score = 0     
    }

    const onReset = () => {
        players.reset()
    }
</script>

<form on:submit|preventDefault={onSubmit} >
    <label for="name" class="label">Name</label>
    <input bind:value={name} id="name" type="text" class="input" placeholder="Player Name">

    <label for="score" class="label">Score</label>
    <input bind:value={score} type="number" id="score" class="input">

    <button class="button is-info mt-2 is-fullwidth">Submit</button>
</form>

<button on:click={onReset} class="button is-warning mt-2 is-fullwidth mb-4">Reset</button>