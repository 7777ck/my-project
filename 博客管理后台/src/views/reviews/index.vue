<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="data"
      border
      fit
      heightlight-current-row
    >
      <!-- 序号 -->
      <el-table-column  align="center" label="序号" width="60">
        <template slot-scope="scope">{{
          scope.$index + (currentPage - 1) * eachPage + 1
        }}</template>
      </el-table-column>
      <!-- 头像 -->
      <el-table-column  align="center" label="头像" width="80">
        <template slot-scope="scope">
          <el-avatar
            shape="square"
            size="small"
            :src="scope.row.avatar"
          ></el-avatar>
        </template>
      </el-table-column>
      <!-- 昵称 -->
      <el-table-column align="center" label="昵称" width="150">
        <template slot-scope="scope">{{ scope.row.nickname }}</template>
      </el-table-column>
      <!-- 评论文章 -->
      <el-table-column  label="评论文章" align="center" width="120">
        <template slot-scope="scope"> 文章名称 </template>
      </el-table-column>
      <!-- 评论内容 -->
      <el-table-column  label="评论内容" align="center">
        <template slot-scope="scope">{{ scope.row.content }}</template>
      </el-table-column>
      <!-- 评论日期 -->
      <el-table-column  label="评论日期" align="center" width="230">
        <template slot-scope="scope">{{ scope.row.createDate }}</template>
      </el-table-column>

      <!-- 操作 -->
      <el-table-column align="center" label="操作" width="160">
        <template slot-scope="scope">
          <el-tooltip content="删除" placement="top" :hide-after="1500">
          <el-button
            icon="el-icon-delete"
            circle
            size="mini"
            @click="deleteComment(scope.row.id)"
          ></el-button>
        </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
  </div>
</div>
</template>

<script>
import { getComment, deleteComment } from "@/api/reviews";
import { formatDate } from "@/utils/tools";
export default {
  data() {
    return {
      listLoading: false,
      currentPage: 1, //当前页面
      eachPage: 5, //每页显示条数
      totalPage: 0, //总页数
      count: 0, //数据总条数
      data: [], //数据详情
      pageCurrent: 1, //分页栏当前页码
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      getComment(this.currentPage, this.eachPage).then(({ data }) => {
        this.listLoading = false;
        this.data = data.rows;
        console.log(data);
        // 对时间戳进行处理
        for (const i of this.data) {
          i.createDate = formatDate(i.createDate);
        }
        this.count = data.total; //计算总条数
        this.totalPage = Math.ceil(this.count / this.eachPage); //总页数
        if (this.currentPage > this.totalPage) {
          this.currentPage = this.totalPage;
          this.fetchData();
        }
      });
    },
    deleteComment({ id }) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });

          deleteComment(id).then((res) => {
            this.fetchData();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style>
</style>