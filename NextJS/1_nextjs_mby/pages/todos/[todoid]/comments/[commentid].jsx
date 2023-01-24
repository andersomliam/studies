import Link from 'next/link'

import { useRouter } from 'next/router'

export default function Comment() {

    const router = useRouter()

    const todoid = router.query.todoid
    const commentid = router.query.commentid

    return (
        <>
            <Link href={`/todos/${todoid}`}>Voltar</Link>

            <br /><br />

            <p>Exibindo o CommentId: {commentid} </p>
            <p>Do ToDo: {todoid}</p>
        </>
    )
}