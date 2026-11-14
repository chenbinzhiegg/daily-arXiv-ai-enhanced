/**
 * Data Source Configuration
 * Modified to use jsDelivr CDN for faster access in China.
 */

const DATA_CONFIG = {
    repoOwner: 'chenbinzhiegg', // 改成了你自己的用户名
    repoName: 'daily-arXiv-ai-enhanced',
    dataBranch: 'data',

    getDataBaseUrl: function() {
        // 使用国内可以访问的 jsDelivr CDN 替换 raw.githubusercontent.com
        // 格式为：https://cdn.jsdelivr.net/gh/用户名/仓库名@分支名
        return `https://cdn.jsdelivr.net/gh/${this.repoOwner}/${this.repoName}@${this.dataBranch}`;
    },

    getDataUrl: function(filePath) {
        return `${this.getDataBaseUrl()}/${filePath}`;
    }
};
