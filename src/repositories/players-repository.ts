import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

const dataBase: PlayerModel[] = [
    {
        id: 1,
        name: "Ronaldo",
        statistics: {
            Overall: 90,
        },
    },
    {
        id: 2,
        name: "Messi",
        statistics: {
            Overall: 96,
        },
    },
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return dataBase;
};

export const findPlayerById = async (
    id: number
): Promise<PlayerModel | undefined> => {
    return dataBase.find((player) => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) => {
    dataBase.push(player);
};

export const deleteOnePlayer = async (id: number) => {
    const index = dataBase.findIndex((player) => player.id === id);

    if (index !== -1) {
        dataBase.splice(index, 1);
        return true;
    }

    return false;
};

export const findAndModifyPlayer = async (
    id: number,
    statistics: StatisticsModel
) => {
    const playerIndex = dataBase.findIndex((player) => player.id === id);

    if (playerIndex !== -1) {
        dataBase[playerIndex].statistics = statistics;
    }

    return dataBase[playerIndex];
};
