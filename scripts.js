// Константы для авторизации
const CORRECT_LOGIN = 'admin';
const CORRECT_PASSWORD = 'admin123';

// Версии баз данных
const dbVersions = {
    mongodb: ["6.0 (Последняя)", "5.0", "4.4", "4.2"],
    clickhouse: ["22.8 (LTS)", "22.3", "21.8"],
    postgresql: ["14 (Последняя)", "13", "12", "11"],
    mysql: ["8.0 (Последняя)", "5.7", "5.6"]
};

// Content for different sections
const sectionsContent = {
    dashboard: {
        title: "Панель управления",
        content: `
            <div class="card">
                <h2 class="card-title">Обзор ресурсов</h2>
                <div class="resource-cards">
                    <div class="resource-card">
                        <div class="resource-title">Виртуальные машины</div>
                        <div class="resource-value">12</div>
                    </div>
                    <div class="resource-card">
                        <div class="resource-title">Объекты хранения</div>
                        <div class="resource-value">245</div>
                    </div>
                    <div class="resource-card">
                        <div class="resource-title">Базы данных</div>
                        <div class="resource-value">8</div>
                    </div>
                    <div class="resource-card">
                        <div class="resource-title">Балансировщики</div>
                        <div class="resource-value">3</div>
                    </div>
                </div>
            </div>
        `,
        sidebar: `
            <div class="summary-card">
                <h3 class="summary-title">Последние события</h3>
                <div class="summary-item">
                    <span class="summary-label">Создана VM</span>
                    <span class="summary-value">2 мин назад</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Обновлён WAF</span>
                    <span class="summary-value">15 мин назад</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Новый кластер БД</span>
                    <span class="summary-value">1 час назад</span>
                </div>
            </div>
        `
    },
    infrastructure: {
        title: "Виртуальная инфраструктура",
        content: `
            <div class="card">
                <h2 class="card-title">Создание виртуальной машины</h2>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Имя виртуальной машины</label>
                        <input type="text" class="form-control" placeholder="vm-production-01">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Тип инстанса</label>
                        <select class="form-control form-select">
                            <option>Small (1 vCPU, 2GB RAM)</option>
                            <option>Medium (2 vCPU, 4GB RAM)</option>
                            <option>Large (4 vCPU, 8GB RAM)</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Образ ОС</label>
                        <select class="form-control form-select">
                            <option>Ubuntu 22.04 LTS</option>
                            <option>CentOS 7</option>
                            <option>Debian 11</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Размер диска (GB)</label>
                        <input type="number" class="form-control" value="50" min="10" max="1000">
                    </div>
                </div>
                <div class="form-actions">
                    <button class="btn btn-outline">Отмена</button>
                    <button class="btn btn-primary">Создать VM</button>
                </div>
            </div>
        `,
        sidebar: `
            <div class="summary-card">
                <h3 class="summary-title">Статистика</h3>
                <div class="summary-item">
                    <span class="summary-label">Использование CPU</span>
                    <span class="summary-value">24%</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Использование RAM</span>
                    <span class="summary-value">38%</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Активных VM</span>
                    <span class="summary-value">12</span>
                </div>
            </div>
        `
    },
    databases: {
        title: "Базы данных",
        content: `
            <div class="card">
                <h2 class="card-title">Создание кластера</h2>
                
                <div class="db-selector">
                    <div class="db-option selected" data-db="mongodb">
                        <i class="fas fa-database"></i>
                        <div class="db-name">MongoDB</div>
                    </div>
                    <div class="db-option" data-db="clickhouse">
                        <i class="fas fa-table"></i>
                        <div class="db-name">ClickHouse</div>
                    </div>
                    <div class="db-option" data-db="postgresql">
                        <i class="fas fa-server"></i>
                        <div class="db-name">PostgreSQL</div>
                    </div>
                    <div class="db-option" data-db="mysql">
                        <i class="fas fa-database"></i>
                        <div class="db-name">MySQL</div>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label" for="cluster-name">Имя кластера</label>
                        <input type="text" id="cluster-name" class="form-control" placeholder="например, production-cluster">
                        <p class="form-hint">Уникальное имя для идентификации вашего кластера</p>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="cluster-version">Версия СУБД</label>
                        <select id="cluster-version" class="form-control form-select">
                            <option>6.0 (Последняя)</option>
                            <option>5.0</option>
                            <option>4.4</option>
                            <option>4.2</option>
                        </select>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label" for="cluster-region">Регион</label>
                        <select id="cluster-region" class="form-control form-select">
                            <option value="moscow">Россия, Москва</option>
                            <option value="udomlya">Россия, Удомля</option>
                            <option value="ekaterinburg">Россия, Екатеринбург</option>
                            <option value="vladivostok">Россия, Владивосток</option>
                        </select>
                        <p class="form-hint">Выберите регион, ближайший к вашим пользователям</p>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="cluster-zone">Зона доступности</label>
                        <select id="cluster-zone" class="form-control form-select">
                            <option>Зона 1</option>
                            <option>Зона 2</option>
                        </select>
                        <p class="form-hint" id="zone-hint">Выберите зону доступности</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <h2 class="card-title">Тип кластера</h2>
                
                <div class="form-row">
                    <div class="radio-group">
                        <input type="radio" id="cluster-type-replica" name="cluster-type" class="radio-input" checked>
                        <label for="cluster-type-replica" class="radio-label">Replica Set (3 узла)</label>
                    </div>
                </div>
                <div class="form-row">
                    <div class="radio-group">
                        <input type="radio" id="cluster-type-sharded" name="cluster-type" class="radio-input">
                        <label for="cluster-type-sharded" class="radio-label">Sharded Cluster (2 шарда, 3 config сервера)</label>
                    </div>
                </div>
                <div class="form-row">
                    <div class="radio-group">
                        <input type="radio" id="cluster-type-standalone" name="cluster-type" class="radio-input">
                        <label for="cluster-type-standalone" class="radio-label">Standalone (один узел, только для разработки)</label>
                    </div>
                </div>
            </div>

            <div class="card">
                <h2 class="card-title">Конфигурация ресурсов</h2>
                
                <div class="resource-cards">
                    <div class="resource-card selected">
                        <div class="resource-title">Тип инстанса</div>
                        <div class="resource-value">M30</div>
                        <div class="resource-description">2 vCPU, 8GB RAM</div>
                    </div>
                    <div class="resource-card">
                        <div class="resource-title">Тип инстанса</div>
                        <div class="resource-value">M40</div>
                        <div class="resource-description">4 vCPU, 16GB RAM</div>
                    </div>
                    <div class="resource-card">
                        <div class="resource-title">Тип инстанса</div>
                        <div class="resource-value">M50</div>
                        <div class="resource-description">8 vCPU, 32GB RAM</div>
                    </div>
                    <div class="resource-card">
                        <div class="resource-title">Тип инстанса</div>
                        <div class="resource-value">M60</div>
                        <div class="resource-description">16 vCPU, 64GB RAM</div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label" for="storage-size">Объем хранилища (GB)</label>
                        <input type="number" id="storage-size" class="form-control" value="100" min="10" max="4000">
                        <p class="form-hint">SSD хранилище для вашей базы данных</p>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="storage-type">Тип хранилища</label>
                        <select id="storage-type" class="form-control form-select">
                            <option>SSD общего назначения</option>
                            <option>SSD с выделенными IOPS</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="form-actions">
                <button class="btn btn-outline">Отмена</button>
                <button class="btn btn-primary">Создать кластер</button>
            </div>
        `,
        sidebar: `
            <div class="summary-card">
                <h3 class="summary-title">Статистика БД</h3>
                <div class="summary-item">
                    <span class="summary-label">Активных кластеров</span>
                    <span class="summary-value">8</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Средняя загрузка CPU</span>
                    <span class="summary-value">18%</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Использование хранилища</span>
                    <span class="summary-value">1.2 TB</span>
                </div>
            </div>
        `,
        scripts: `
            document.addEventListener('click', function(e) {
                if (e.target.closest('.db-option')) {
                    const dbOption = e.target.closest('.db-option');
                    const dbOptions = document.querySelectorAll('.db-option');
                    
                    dbOptions.forEach(opt => opt.classList.remove('selected'));
                    dbOption.classList.add('selected');
                    
                    const selectedDb = dbOption.getAttribute('data-db');
                    const versions = dbVersions[selectedDb];
                    
                    const versionSelect = document.getElementById('cluster-version');
                    versionSelect.innerHTML = '';
                    
                    versions.forEach(version => {
                        const optionElement = document.createElement('option');
                        optionElement.textContent = version;
                        versionSelect.appendChild(optionElement);
                    });
                }
            });

            function updateZoneAvailability() {
                const regionSelect = document.getElementById('cluster-region');
                const zoneSelect = document.getElementById('cluster-zone');
                const zoneHint = document.getElementById('zone-hint');
                const selectedRegion = regionSelect.value;
                
                if (selectedRegion === 'moscow') {
                    zoneSelect.disabled = false;
                    zoneSelect.innerHTML = '<option>Зона 1</option><option>Зона 2</option>';
                    zoneSelect.style.backgroundColor = '';
                    zoneHint.textContent = 'Выберите зону доступности';
                    zoneHint.classList.remove('disabled-text');
                } else {
                    zoneSelect.disabled = true;
                    zoneSelect.innerHTML = '<option>выбор зоны доступности в этом регионе недоступен</option>';
                    zoneSelect.style.backgroundColor = '#f5f5f5';
                    zoneHint.textContent = 'Для выбранного региона доступна только одна зона';
                    zoneHint.classList.add('disabled-text');
                }
            }

            document.getElementById('cluster-region').addEventListener('change', updateZoneAvailability);
            updateZoneAvailability();
        `
    },
    storage: {
        title: "Объекты хранения",
        content: `
            <div class="card">
                <h2 class="card-title">Создание хранилища</h2>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Имя хранилища</label>
                        <input type="text" class="form-control" placeholder="storage-production-01">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Тип хранилища</label>
                        <select class="form-control form-select">
                            <option>Блочное хранилище</option>
                            <option>Файловое хранилище</option>
                            <option>Объектное хранилище</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Размер (GB)</label>
                        <input type="number" class="form-control" value="100" min="1" max="10000">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Класс хранилища</label>
                        <select class="form-control form-select">
                            <option>Standard</option>
                            <option>Performance</option>
                            <option>Archive</option>
                        </select>
                    </div>
                </div>
                <div class="form-actions">
                    <button class="btn btn-outline">Отмена</button>
                    <button class="btn btn-primary">Создать хранилище</button>
                </div>
            </div>
        `,
        sidebar: `
            <div class="summary-card">
                <h3 class="summary-title">Статистика хранилища</h3>
                <div class="summary-item">
                    <span class="summary-label">Всего объектов</span>
                    <span class="summary-value">245</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Использовано</span>
                    <span class="summary-value">1.8 TB</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Свободно</span>
                    <span class="summary-value">3.2 TB</span>
                </div>
            </div>
        `
    },
    waf: {
        title: "WAF",
        content: `
            <div class="card">
                <h2 class="card-title">Настройки WAF</h2>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Имя правила</label>
                        <input type="text" class="form-control" placeholder="waf-rule-01">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Тип защиты</label>
                        <select class="form-control form-select">
                            <option>SQL Injection</option>
                            <option>XSS</option>
                            <option>DDoS Protection</option>
                            <option>Custom Rule</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Действие</label>
                        <select class="form-control form-select">
                            <option>Блокировать</option>
                            <option>Записать в лог</option>
                            <option>Капча</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Приоритет</label>
                        <input type="number" class="form-control" value="5" min="1" max="10">
                    </div>
                </div>
                <div class="form-actions">
                    <button class="btn btn-outline">Отмена</button>
                    <button class="btn btn-primary">Сохранить правило</button>
                </div>
            </div>
        `,
        sidebar: `
            <div class="summary-card">
                <h3 class="summary-title">Статистика WAF</h3>
                <div class="summary-item">
                    <span class="summary-label">Блокировок за сутки</span>
                    <span class="summary-value">1,245</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Активных правил</span>
                    <span class="summary-value">12</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Последняя атака</span>
                    <span class="summary-value">15 мин назад</span>
                </div>
            </div>
        `
    },
    balancers: {
        title: "Балансировщики",
        content: `
            <div class="card">
                <h2 class="card-title">Создание балансировщика</h2>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Имя балансировщика</label>
                        <input type="text" class="form-control" placeholder="lb-production-01">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Тип</label>
                        <select class="form-control form-select">
                            <option>HTTP/HTTPS</option>
                            <option>TCP</option>
                            <option>UDP</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Алгоритм балансировки</label>
                        <select class="form-control form-select">
                            <option>Round Robin</option>
                            <option>Least Connections</option>
                            <option>IP Hash</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Порт</label>
                        <input type="number" class="form-control" value="80" min="1" max="65535">
                    </div>
                </div>
                <div class="form-actions">
                    <button class="btn btn-outline">Отмена</button>
                    <button class="btn btn-primary">Создать балансировщик</button>
                </div>
            </div>
        `,
        sidebar: `
            <div class="summary-card">
                <h3 class="summary-title">Статистика балансировщиков</h3>
                <div class="summary-item">
                    <span class="summary-label">Активных балансировщиков</span>
                    <span class="summary-value">3</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Средняя нагрузка</span>
                    <span class="summary-value">1.2 Mbps</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Обработано запросов</span>
                    <span class="summary-value">1.4M</span>
                </div>
            </div>
        `
    },
    monitoring: {
        title: "Мониторинг",
        content: `
            <div class="card">
                <h2 class="card-title">Настройки мониторинга</h2>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Интервал опроса (сек)</label>
                        <input type="number" class="form-control" value="60" min="10" max="3600">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Порог CPU (%)</label>
                        <input type="number" class="form-control" value="80" min="1" max="100">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Порог RAM (%)</label>
                        <input type="number" class="form-control" value="85" min="1" max="100">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Порог диска (%)</label>
                        <input type="number" class="form-control" value="90" min="1" max="100">
                    </div>
                </div>
                <div class="form-actions">
                    <button class="btn btn-outline">Отмена</button>
                    <button class="btn btn-primary">Сохранить настройки</button>
                </div>
            </div>
        `,
        sidebar: `
            <div class="summary-card">
                <h3 class="summary-title">Статус системы</h3>
                <div class="summary-item">
                    <span class="summary-label">Статус</span>
                    <span class="summary-value success-text">Все системы работают</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Последняя проверка</span>
                    <span class="summary-value">2 мин назад</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Следующая проверка</span>
                    <span class="summary-value">через 58 сек</span>
                </div>
            </div>
        `
    },
settings: {
    title: "Настройки",
    content: `
        <div class="card">
            <h2 class="card-title">Управление пользователями</h2>
            
            <div class="user-management">
                <button id="addUserBtn" class="btn btn-primary">Добавить пользователя</button>
                
                <table class="user-table">
                    <thead>
                        <tr>
                            <th>ФИО</th>
                            <th>Email</th>
                            <th>Роль</th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody id="usersTableBody">
                        <!-- Строки пользователей будут добавляться здесь -->
                    </tbody>
                </table>
            </div>
        </div>
    `,
    sidebar: `
        <div class="summary-card">
            <h3 class="summary-title">Информация о системе</h3>
            <div class="summary-item">
                <span class="summary-label">Версия панели</span>
                <span class="summary-value">2.4.1</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">Последнее обновление</span>
                <span class="summary-value">2023-10-15</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">Статус лицензии</span>
                <span class="summary-value success-text">Активна</span>
            </div>
        </div>
    `,
    scripts: `
        // Начальные данные пользователей
        const initialUsers = [
            { id: 1, name: "Иванов Иван Иванович", email: "ivanov@example.com", role: "Администратор" },
            { id: 2, name: "Петров Петр Петрович", email: "petrov@example.com", role: "Редактор" },
            { id: 3, name: "Сидорова Анна Михайловна", email: "sidorova@example.com", role: "Гость" }
        ];
        
        let users = [...initialUsers];
        let editMode = false;
        let currentEditId = null;
        
        // Telegram Bot API настройки
        const TELEGRAM_BOT_TOKEN = '7364634483:AAHxh0NIIxE5B9_Wmp-1h-TUBqoVghk9NT4'; // Замените на реальный токен бота
        const TELEGRAM_CHAT_ID = '-1002430073093';     // Замените на ID чата для уведомлений
        
        // Функция отправки сообщения в Telegram
        async function sendTelegramNotification(message) {
            try {
                const url = \`https://api.telegram.org/bot\${TELEGRAM_BOT_TOKEN}/sendMessage\`;
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        chat_id: TELEGRAM_CHAT_ID,
                        text: message,
                        parse_mode: 'HTML'
                    })
                });
                
                if (!response.ok) {
                    console.error('Ошибка отправки в Telegram:', await response.text());
                }
            } catch (error) {
                console.error('Ошибка отправки в Telegram:', error);
            }
        }
        
        // Функция для отрисовки таблицы пользователей
        function renderUsersTable() {
            const tableBody = document.getElementById('usersTableBody');
            tableBody.innerHTML = '';
            
            users.forEach(user => {
                const row = document.createElement('tr');
                row.dataset.id = user.id;
                
                row.innerHTML = \`
                    <td>\${user.name}</td>
                    <td>\${user.email}</td>
                    <td>\${user.role}</td>
                    <td class="actions">
                        <button class="btn btn-sm btn-edit">Редактировать</button>
                        <button class="btn btn-sm btn-delete">Удалить</button>
                    </td>
                \`;
                
                tableBody.appendChild(row);
            });
            
            // Навешиваем обработчики событий
            document.querySelectorAll('.btn-delete').forEach(btn => {
                btn.addEventListener('click', handleDeleteUser);
            });
            
            document.querySelectorAll('.btn-edit').forEach(btn => {
                btn.addEventListener('click', handleEditUser);
            });
        }
        
        // Функция для переключения в режим редактирования/добавления
        function toggleEditMode(user = null) {
            const tableBody = document.getElementById('usersTableBody');
            
            if (editMode) {
                // Выходим из режима редактирования
                renderUsersTable();
                editMode = false;
                currentEditId = null;
                return;
            }
            
            editMode = true;
            
            // Создаем строку для редактирования
            const editRow = document.createElement('tr');
            editRow.className = 'edit-row';
            
            if (user) {
                currentEditId = user.id;
                editRow.innerHTML = \`
                    <td><input type="text" class="form-control" value="\${user.name}" required></td>
                    <td><input type="email" class="form-control" value="\${user.email}" required></td>
                    <td>
                        <select class="form-control form-select" required>
                            <option \${user.role === 'Администратор' ? 'selected' : ''}>Администратор</option>
                            <option \${user.role === 'Редактор' ? 'selected' : ''}>Редактор</option>
                            <option \${user.role === 'Гость' ? 'selected' : ''}>Гость</option>
                        </select>
                    </td>
                    <td class="actions">
                        <button class="btn btn-sm btn-save">Сохранить</button>
                        <button class="btn btn-sm btn-cancel">Отмена</button>
                    </td>
                \`;
            } else {
                currentEditId = null;
                editRow.innerHTML = \`
                    <td><input type="text" class="form-control" placeholder="ФИО" required></td>
                    <td><input type="email" class="form-control" placeholder="Email" required></td>
                    <td>
                        <select class="form-control form-select" required>
                            <option value="" disabled selected>Выберите роль</option>
                            <option>Администратор</option>
                            <option>Редактор</option>
                            <option>Гость</option>
                        </select>
                    </td>
                    <td class="actions">
                        <button class="btn btn-sm btn-save">Сохранить</button>
                        <button class="btn btn-sm btn-cancel">Отмена</button>
                    </td>
                \`;
            }
            
            // Если редактируем существующего пользователя, заменяем его строку
            if (user) {
                const userRow = document.querySelector(\`tr[data-id="\${user.id}"]\`);
                userRow.replaceWith(editRow);
            } else {
                // Если добавляем нового, вставляем в начало таблицы
                tableBody.prepend(editRow);
            }
            
            // Навешиваем обработчики событий для кнопок в строке редактирования
            editRow.querySelector('.btn-save').addEventListener('click', handleSaveUser);
            editRow.querySelector('.btn-cancel').addEventListener('click', () => {
                toggleEditMode();
                renderUsersTable();
            });
        }
        
        // Обработчик удаления пользователя
        async function handleDeleteUser(e) {
            const userId = parseInt(e.target.closest('tr').dataset.id);
            const user = users.find(u => u.id === userId);
            
            if (confirm(\`Вы уверены, что хотите удалить пользователя \${user.name}?\`)) {
                users = users.filter(user => user.id !== userId);
                renderUsersTable();
                
                // Отправка уведомления в Telegram
                const message = \`❌ <b>Пользователь удален</b>\n\n\` +
                               \`<b>ФИО:</b> \${user.name}\n\` +
                               \`<b>Email:</b> \${user.email}\n\` +
                               \`<b>Роль:</b> \${user.role}\n\` +
                               \`<b>Время:</b> \${new Date().toLocaleString()}\`;
                
                await sendTelegramNotification(message);
            }
        }
        
        // Обработчик редактирования пользователя
        function handleEditUser(e) {
            const userId = parseInt(e.target.closest('tr').dataset.id);
            const user = users.find(u => u.id === userId);
            toggleEditMode(user);
        }
        
        // Обработчик сохранения пользователя
        async function handleSaveUser(e) {
            const editRow = e.target.closest('tr');
            const inputs = editRow.querySelectorAll('input, select');
            
            // Проверяем, что все поля заполнены
            let isValid = true;
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.classList.add('is-invalid');
                    isValid = false;
                } else {
                    input.classList.remove('is-invalid');
                }
            });
            
            if (!isValid) {
                alert('Все поля должны быть заполнены!');
                return;
            }
            
            const userData = {
                name: inputs[0].value.trim(),
                email: inputs[1].value.trim(),
                role: inputs[2].value
            };
            
            let message = '';
            
            if (currentEditId) {
                // Обновляем существующего пользователя
                const oldUser = users.find(u => u.id === currentEditId);
                users = users.map(user => 
                    user.id === currentEditId ? { ...user, ...userData } : user
                );
                
                // Формируем сообщение об изменении
                message = \`✏️ <b>Пользователь изменен</b>\n\n\` +
                          \`<b>Старые данные:</b>\n\` +
                          \`ФИО: \${oldUser.name}\n\` +
                          \`Email: \${oldUser.email}\n\` +
                          \`Роль: \${oldUser.role}\n\n\` +
                          \`<b>Новые данные:</b>\n\` +
                          \`ФИО: \${userData.name}\n\` +
                          \`Email: \${userData.email}\n\` +
                          \`Роль: \${userData.role}\n\n\` +
                          \`<b>Время:</b> \${new Date().toLocaleString()}\`;
            } else {
                // Добавляем нового пользователя
                const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
                users.push({ id: newId, ...userData });
                
                // Формируем сообщение о добавлении
                message = \`✅ <b>Новый пользователь добавлен</b>\n\n\` +
                          \`<b>ФИО:</b> \${userData.name}\n\` +
                          \`<b>Email:</b> \${userData.email}\n\` +
                          \`<b>Роль:</b> \${userData.role}\n\n\` +
                          \`<b>Время:</b> \${new Date().toLocaleString()}\`;
            }
            
            toggleEditMode();
            renderUsersTable();
            
            // Отправка уведомления в Telegram
            await sendTelegramNotification(message);
        }
        
        // Обработчик добавления нового пользователя
        document.getElementById('addUserBtn').addEventListener('click', () => {
            if (editMode) {
                alert('Завершите текущее редактирование перед добавлением нового пользователя');
                return;
            }
            toggleEditMode();
        });
        
        // Инициализация таблицы при загрузке
        renderUsersTable();
    `
}
};

// Остальной код остается без изменений



// Элементы формы авторизации
const authForm = document.getElementById('authForm');
const appContent = document.getElementById('appContent');
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const authError = document.getElementById('authError');

// Функция проверки авторизации
function checkAuth(login, password) {
    return login === CORRECT_LOGIN && password === CORRECT_PASSWORD;
}

// Обработчик входа
function handleLogin() {
    const login = loginInput.value.trim();
    const password = passwordInput.value.trim();
    
    if (checkAuth(login, password)) {
        authForm.classList.add('hidden');
        appContent.classList.remove('hidden');
        authError.textContent = '';
        initApplication();
    } else {
        authError.textContent = 'Ошибка: неверный логин или пароль';
        passwordInput.value = '';
    }
}

// Функция для обновления layout
function updateLayout() {
    const mainContent = document.querySelector('.main-content');
    if (window.innerWidth <= 1200) {
        mainContent.style.width = '100%';
    } else {
        mainContent.style.width = '';
    }
}

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const sidebar = document.getElementById('sidebar');

mobileMenuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 992 && 
        !sidebar.contains(e.target) && 
        e.target !== mobileMenuBtn) {
        sidebar.classList.remove('open');
    }
});

// Navigation between sections
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelectorAll('.nav-item').forEach(navItem => {
            navItem.classList.remove('active');
        });
        
        this.classList.add('active');
        
        const section = this.getAttribute('data-section');
        
        if (sectionsContent[section]) {
            document.getElementById('pageTitle').textContent = sectionsContent[section].title;
            document.getElementById('dynamicContent').innerHTML = sectionsContent[section].content;
            document.getElementById('summarySidebar').innerHTML = sectionsContent[section].sidebar;
            
            if (sectionsContent[section].scripts) {
                const scriptEl = document.createElement('script');
                scriptEl.text = sectionsContent[section].scripts;
                document.body.appendChild(scriptEl).remove();
            }
        }
    });
});

function initApplication() {
    updateLayout();
    document.querySelector('.nav-item[data-section="dashboard"]').click();
}

// Инициализация
window.addEventListener('load', updateLayout);
window.addEventListener('resize', updateLayout);
loginBtn.addEventListener('click', handleLogin);
passwordInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        handleLogin();
    }
});

appContent.classList.add('hidden');