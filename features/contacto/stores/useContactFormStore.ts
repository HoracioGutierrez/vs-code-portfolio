import { create } from "zustand";

type ContactFormStore = {
    name: string
    email: string
    message: string
    sendMessageAndSaveToDB: () => void
    setPropertyValue: (property: string, value: string) => void
    resetForm: () => void
}

const useContactFormStore = create<ContactFormStore>()((set) => ({
    name: "",
    email: "",
    message: "",
    sendMessageAndSaveToDB: () => {
        console.log("sendMessageAndSaveToDB")
    },
    setPropertyValue: (property: string, value: string) => {
        set(() => ({ [property]: value }))
    },
    resetForm: () => {
        set(() => ({
            name: "",
            email: "",
            message: "",
        }))
    }
}))

export default useContactFormStore