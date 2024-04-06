#include <stdio.h>
int main()
{
    int R[3] = {10, 5, 7};
    int R1, R2, R3;
    int Process[5][3] = {
        {0, 1, 0},
        {2, 0, 0},
        {3, 0, 2},
        {2, 1, 1},
        {0, 0, 2}};

    int Max[5][3] = {
        {7, 5, 3},
        {3, 2, 2},
        {9, 0, 2},
        {2, 2, 2},
        {4, 3, 3}};

    int flag[5] = {0, 0, 0, 0, 0};
    int Need[5][3];
    int Avail[3];
    int list[5];
    // int Max[5][3];
    // int Process[5][3];
    // printf("Enter data for Processers Resources:\n");
    // for (int i = 0; i < 5; i++)
    // {
    //     for (int j = 0; j < 3; j++)
    //     {
    //         scanf("%d", %Process[i][j]);
    //     }
    // }
    // printf("Enter data for Processers Max Needs:\n");
    // for (int i = 0; i < 5; i++)
    // {
    //     for (int j = 0; j < 3; j++)
    //     {
    //         scanf("%d", %Max[i][j]);
    //     }
    // }
    for (int i = 0; i < 5; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            Need[i][j] = Max[i][j] - Process[i][j];
            printf("%d", Need[i][j]);
        }
        printf("\n");
    }

    R1 = Process[0][0] + Process[1][0] + Process[2][0] + Process[3][0] + Process[4][0];
    R2 = Process[0][1] + Process[1][1] + Process[2][1] + Process[3][1] + Process[4][1];
    R3 = Process[0][2] + Process[1][2] + Process[2][2] + Process[3][2] + Process[4][2];
    Avail[0] = R[0] - R1;
    Avail[1] = R[1] - R2;
    Avail[2] = R[2] - R3;
    int totaldone = 0;
    int check[5] = {0, 0, 0, 0, 0};
    for (int i = 0; totaldone != 5; i = (i + 1) % 5)
    {

        int co = 0;
        if (!flag[i])
        {
            for (int j = 0; j < 3; j++)
            {

                if ((Need[i][j] <= Avail[j]))
                {

                    co++;
                }
            }
            if (co == 3)
            {
                flag[i] = i;
                list[totaldone] = i;
                totaldone++;

                Avail[0] = Avail[0] + Process[i][0];
                Avail[1] = Avail[1] + Process[i][1];
                Avail[2] = Avail[2] + Process[i][2];
            }
        }
    }

    for (int i = 0; i < 5; i++)
    {

        printf("P%d->", list[i]);
    }
}