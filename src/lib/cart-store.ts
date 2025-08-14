import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type BookList = {
  username: string
  room: string
  seat: string
  status: boolean
  qty: number
}

type BookStore = {
  items: BookList[]
  addItem: (item: BookList) => void
  removeItem: (productId: string) => void
  clearBook: () => void
  totalItems: () => number
  totalPrice: () => number
}

export const useBookStore= create<BookStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const existing = get().items.find((i) => i.room === item.room)
        if (existing) {
          set({
            items: get().items.map((i) =>
              i.room === item.room
                ? { ...i, qty: i.seat + item.seat }
                : i
            ),
          })
        } else {
          set({ items: [...get().items, item] })
        }
      },
      removeItem: (productId) =>
        set({
          items: get().items.filter((i) => i.room !== productId),
        }),
      clearBook: () => set({ items: [] }),
      totalItems: () =>
        get().items.reduce((total, item) => total + item.qty, 0),
      totalPrice: () =>
        get().items.reduce((total, item) => total + item.qty * item.qty, 0),
    }),
    {
      name: 'codingthailand-cart', // key ที่ใช้ใน localStorage
    }
  )
)