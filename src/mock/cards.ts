import ICard from "../types/ICard.ts";

export const cards_mock: Array<ICard> = [
    {
        setKey: 737268,
        birthDate: "2001-03-05",
        phoneNumber: "",
        email: "skd@knp24.ru",
        surname: "Конищев",
        cardNumber: "3000000210376609",
        name: "Антон",
        password: "",
        lastname: "Алексеевич",
        appAccount: true,
        cardStates: [
          {
            cardKey: 628399,
            type: "physical",
            active: false,
            bonusSum: 0,
            lastExpenses: 0,
            currentExpenses: 0,
            lastTransactionDate: "1899-12-31T17:48:34.000Z"
          },
          {
            cardKey: 649410,
            type: "privilege",
            active: true,
            bonusSum: 0.82,
            lastExpenses: 634,
            currentExpenses: 0,
            lastTransactionDate: "2024-10-21T09:49:58.000Z"
          }
        ]
      },
      {
        setKey: 758923,
        birthDate: "2001-03-05",
        phoneNumber: "79607616565",
        email: "skd@knp24.ru",
        surname: "Конищев",
        cardNumber: "3000000210376609",
        name: "Антон",
        password: "394jsda4",
        lastname: "Алексеевич",
        appAccount: true,
        cardStates: [
            {
              cardKey: 628399,
              type: "physical",
              active: false,
              bonusSum: 0,
              lastExpenses: 0,
              currentExpenses: 0,
              lastTransactionDate: "1899-12-31T17:48:34.000Z"
            },
            {
              cardKey: 649410,
              type: "privilege",
              active: true,
              bonusSum: 0.82,
              lastExpenses: 634,
              currentExpenses: 0,
              lastTransactionDate: "2024-10-21T09:49:58.000Z"
            }
          ]
      },
]