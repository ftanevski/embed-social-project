<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <div class="dropdown">
                    <select class="btn btn-default dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="50">50</option>
                    </select>
                </div>
            </div>
            <div class="col-md-9">
              <button class="btn btn-secondary">Filter Submissions</button>
            </div>
            <div class="col-md-1">
              <button class="btn btn-primary">Create Submission</button>
            </div>
        </div>
        <div class="row">
            <entry-table></entry-table>
        </div>
        <div class="footerRow justify-content-center">
            <load-more></load-more>
        </div>
    </div>
</template>

<script>
import EntryTable from "./components/EntryTable";
import LoadMore from "./components/LoadMore";

export default {
  name: "App",
  components: {
    EntryTable,
    LoadMore,
  },
};
</script>

<style>
@import url("https://veganmanager.com/src-old/assets/css/bootstrap.min.css");
@import url("https://veganmanager.com/src-old/assets/css/oneui.min.css");
@import url("https://veganmanager.com/src-old/assets/css/style-new.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 13px;
}

.footerRow {
  margin-bottom: 30px;
}

.headerRow {
  display: flex;
  margin-bottom: 10px;
}
</style>
