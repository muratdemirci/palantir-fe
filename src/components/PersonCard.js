import React from 'react'

function PersonCard() {
    return (
        <div class="rounded-lg border border-gray-200 shadow-md grid grid-cols-3 justify-items-center gap-8">
            <div class="flex flex-col col-span-1 w-48 items-center p-10">
                <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://avatars.githubusercontent.com/u/57131407?v=4" alt="" />
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Uğurcan Çağlayan</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">Java Backend Engineer</span>
            </div>

            <div class="flex flex-col col-span-1 w-48 items-center p-10">
                <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://avatars.githubusercontent.com/u/6681137?v=4" alt="" />
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Murat Demirci</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">Full Stack Developer</span>
            </div>

             <div class="flex flex-col col-span-1 w-48 items-center p-10">
                <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://avatars.githubusercontent.com/u/46098083?v=4" alt="" />
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Ahmet Doğukan Yıldıran</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">Full Stack Developer</span>
            </div>
        </div>

    )
}

export default PersonCard