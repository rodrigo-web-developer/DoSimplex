function pivot_on(tab, row, col) { var i, j; var pivot; pivot = tab.mat[row][col]; for (j = 0; j < tab.n; j++)        tab.mat[row][j] /= pivot; for (i = 0; i < tab.m; i++) { var multiplier = tab.mat[i][col]; if (i == row) continue; for (j = 0; j < tab.n; j++) { tab.mat[i][j] -= multiplier * tab.mat[row][j]; } } } function find_pivot_column(tab) { var j, pivot_col = 1; var lowest = tab.mat[0][pivot_col]; for (j = 1; j < tab.n; j++) { if (tab.mat[0][j] < lowest) { lowest = tab.mat[0][j]; pivot_col = j; } } if (lowest >= 0) { return -1; } return pivot_col; } function find_pivot_row(tab, pivot_col) { var i, pivot_row = 0; var min_ratio = -1; for (i = 1; i < tab.m; i++) { var ratio = tab.mat[i][0] / tab.mat[i][pivot_col]; if ((ratio > 0 && ratio < min_ratio) || min_ratio < 0) { min_ratio = ratio; pivot_row = i; } } if (min_ratio == -1) return -1; return pivot_row; } function add_variaveis_funcionais(tab) { var i, j; for (i = 0; i < tab.m; i++) { for (j = 1; j < tab.m; j++)            tab.mat[i][j + tab.n - 1] = (i == j) ? 1 : 0; } tab.n += tab.m - 1; } function find_basis_variable(tab, col) { var i, xi = -1; for (i = 1; i < tab.m; i++) { if (tab.mat[i][col] == 1) { if (xi == -1) xi = i; else return -1; } else if (tab.mat[i][col] != 0) { return -1; } } return xi; } function print_optimal_vector(tab, message) { var j, xi; for (j = 1; j < tab.n; j++) { xi = find_basis_variable(tab, j); } } function simplex(tab) { var loop = 0; add_variaveis_funcionais(tab); while (++loop) { var pivot_col, pivot_row; pivot_col = find_pivot_column(tab); if (pivot_col < 0) { print_optimal_vector(tab, "Optimal vector"); break; } pivot_row = find_pivot_row(tab, pivot_col); if (pivot_row < 0) { break; } pivot_on(tab, pivot_row, pivot_col); print_optimal_vector(tab, "Basic feasible solution"); if (loop > 20) { break; } } }