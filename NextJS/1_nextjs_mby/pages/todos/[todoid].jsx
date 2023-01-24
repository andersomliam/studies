import Link from 'next/link'

export async function getStaticProps(context) {

    const { params } = context

    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoid}`)

    const todo = await data.json()

    return {
        props: { todo },
    }
}

export async function getStaticPaths() {

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/')

    const data = await response.json()

    const paths = data.map((todo) => {

        return {
            params: {
                todoid: `${todo.id}`,
            },
        }
    })

    return { paths, fallback: false }
}

export default function Todo({ todo }) {

    return (
        <>
            <Link href='/todos'>Voltar</Link>

            <br /><br />

            <p>Exibindo o todoId: {todo.id} </p>
            <h3>Texto: {todo.title}</h3>

            <br /><br />

            <p>Comantários: Bla, bla, bla... <Link href={`/todos/${todo.id}/comments/1`}>Detalhes</Link></p>
        </>
    )
}