export default function FeedbackForm() {

    function handleClick() {
        // Получаем имя напрямую из prompt, так как состояние обновляется асинхронно
        const name = prompt('What is your name?') ?? "";
        alert(`Hello, ${name}!`);
    }

    return <button onClick={handleClick}>Greet</button>;
}