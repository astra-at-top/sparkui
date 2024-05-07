import * as Dialog from "@radix-ui/react-dialog"

function Modal(props) {
    return (<>
        <Dialog.Root >
            <Dialog.Trigger>
                {props.trigger}
            </Dialog.Trigger>
            <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 backdrop-blur-lg" />
            <Dialog.Content className="bg-zinc-100 font-quicksand  p-5 rounded-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ maxWidth: 700 }}>
                <Dialog.Title className="md:text-4xl text-xl flex justify-between items-center font-bold text-gray-700">
                    <span>{props.title}</span>
                    <Dialog.Close className="text-red-600">
                        <button className="border border-red-500 rounded-lg p-0 " >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </Dialog.Close>
                </Dialog.Title>
                {props.description && <Dialog.Description className="text-sm hidden lg:block text-gray-600">
                    {props.description}
                </Dialog.Description> }
                
                {props.content}
            </Dialog.Content>
            </Dialog.Portal>
            
        </Dialog.Root>
    </>)
}

export {Modal}