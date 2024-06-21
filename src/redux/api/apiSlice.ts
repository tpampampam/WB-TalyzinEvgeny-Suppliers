import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, Cities } from "../../utils/constants"


export interface Card  {
    id: string
    number: string
    date: string
    city: Cities
    quantity: number
    type: string
    warehouse: string
    address: string
    status: string
}

export interface Page  {
    first: number
    prev: number | null
    next: number
    last: number | null
}

export interface Data extends Page {
    cards: Card[]
    pages?: number
    items?: number
} 

export interface ListArguments {
    limit?: number
    page?: number
    type?: string
    search?: string
}


export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    tagTypes:['Suppliers'],
    endpoints: (builder) => ({
        getList: builder.query<Data, ListArguments>({
            query: ({limit = 5, page = 1, type = 'number' , search}) => {
                let query = `suppliers?page=${page}&limit=${limit}`;
                if(search) query += `&${type}=${search}`
                return query
            },
            providesTags: (result) =>
            result
            ? [
                ...result.cards.map(({ id }) => ({ type: 'Suppliers' as const, id })),
                { type: 'Suppliers', id: 'LIST' },
                ]
            : [{ type: 'Suppliers' as const, id: 'LIST' }],
        }),
        updateCard: builder.mutation<void, Card>({
            query: (card) => ({
                url: `/suppliers/${card.id}`,
                method: 'PUT',
                body: card
            }),
            invalidatesTags: ['Suppliers']
        }),
        deleteCard: builder.mutation<void, string>({
            query: (id) => ({
                url: `/suppliers/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Suppliers']
        }),
        addNewCard: builder.mutation<void, Card>({
            query: (card) => ({
                url: '/suppliers',
                method: 'POST',
                body: card
            }),
            invalidatesTags: ['Suppliers']
        })
    })
})

export const { 
    useGetListQuery, 
    useUpdateCardMutation, 
    useDeleteCardMutation, 
    useAddNewCardMutation,
} = apiSlice;


