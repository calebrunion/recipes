import Head from 'next/head'
import Link from 'next/link'

function Home() {
    return (
        <>
        <Head>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <title>Paleo Runion Mama's Recipes</title>
            <link rel="stylesheet" href="/build.css" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            <title>Paleo Runion Mama's Recipes</title>
        </Head>

        <Link href="/">Go Back Home</Link>
        <main class="font-sans text-red-500">
            <ul>
                <li><a href="recipes/broccoli-casserole.html">Broccoli Casserole</a></li>
                <li><a href="recipes/buffalo-chicken-dip.html">Buffalo Chicken Dip</a></li>
                <li><a href="recipes/whole30-meatloaf.html">Whole30 Meatloaf</a></li>
            </ul>
        </main>
        </>
    )
}


export default Home