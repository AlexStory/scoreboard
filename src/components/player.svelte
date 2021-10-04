<script>
    export let player
    let count = 1
    const decrement = () => player.score -= count
    const increment = () => player.score += count
</script>

<div class="card">
    <div class="card-content">
        <div class="columns">
            <div class="column">
                <p class="title">{player.name}</p>
                <h1 class="subtitle">{ player.score }</h1>
            </div>
            <div class="column is-flex flex-row">
                <button on:click={decrement} class="button is-danger">-</button>
                <input bind:value={count} type="number" class="input">
                <button on:click={increment} class="button is-primary">+</button>
            </div>
        </div>
    </div>

</div>

<style>
    .card {
        margin-bottom: 20px;
    }

    input[type="number"] {
        width: 100px;
    }
</style>